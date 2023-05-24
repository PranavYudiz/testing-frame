const mongoose = require('mongoose');
const UserModel = require('./usermodel'); // Replace with the path to your model file

const expect = require('chai').expect;
require('chai').use(require('chai-mongo-doc'));
// require('chai').use(require('maybe-chai'));

const maybeChai = require('maybe-chai');

require('chai').use(maybeChai);

const deepEqualInAnyOrder = require('deep-equal-in-any-order');
require('chai').use(deepEqualInAnyOrder);

// 

const sinon = require('sinon');


describe('User Model', () => {
  before(async () => {
    // Connect to the MongoDB test database
    await mongoose.connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  beforeEach(async () => {
    await UserModel.deleteMany({});
  });

   afterEach(async () => {
    await UserModel.deleteMany({});
  });


  after(async () => {
    await mongoose.connection.close();
  });

  it('should save a valid user', async () => {
    const user = new UserModel({
      username: 'john_doe',
      email: 'john@example.com'
    });

    try {
      await user.save();
      expect(user._id).to.be.objectId
    } catch (error) {
      throw new Error('Test case failed: ' + error);
    }
  });

  it('should throw an error when saving a user with an invalid email', async () => {
    const user = new UserModel({
      username: 'jane_doe',
      email: 'invalid_email'
    });

    try {
      await user.save();
      throw new Error('Test case should have thrown an error');
    } catch (error) {
      expect(error.message).to.equal('User validation failed: email: Invalid email address');
    }
  });

//   return error while storing same username
    // it('should throw an error when saving a user with an same username', async () => {
    //     const user = new UserModel({
    //         username: 'jane_doe',
    //         email: 'john@example.com'
    //     });

    //     const user1 = new UserModel({
    //         username: 'jane_doe',
    //         email: 'john@example.com'
    //     });

    //     try{
    //         await user.save();
    //         await user1.save();
    //         throw new Error('Test case should have thrown an error');
    //     }catch(error){
    //         expect(error.message).to.equal('User validation failed: username: username already exists');
    //     }

    // }
    // );

    //   return error while storing same email
    it('should throw an error when saving a user with an same email', async () => {
        const user = new UserModel({
            username: 'jane_doe123',
            email: 'john@example.com'

        });

        const user1 = new UserModel({
            username: 'jane_doe1234',
            email: 'johndo@example.com'
        });

        try{
            const a=await user.save();
            console.log(a);
            const b=await user1.save();
            console.log(b);

            expect(a).to.exist;
            expect(b).to.exist;

            expect(a.email).to.equal(b.email);
            expect(a.username).to.equal(b.username);

            expect(a.username).to.not.equal(b.username);


        }catch(error){
            expect(error.message).to.equal('User validation failed: email: email already exists');
        }

    } ) 


    // get user by id
    it('should get user by id', async () => {
        const user = new UserModel({
            username: 'jane_doe123',
            email: 'aafa@gmial.com'
        });

        try{

            await user.save();
            console.log(user);
            const foundUser = await UserModel.getUser(user._id);
            expect(foundUser).to.exist;
            expect(foundUser.email).to.equal('aafa@gmial.com')


        }catch(error){
            expect(error.message).to.equal('User validation failed: email: email already exists');
        }
    });

    //use of maybe-chai for testcase

    it('should get user by id', async () => {
      expect([1, 2]).to.deep.equalInAnyOrder([2, 1]);
        expect([1, 2]).to.not.deep.equalInAnyOrder([2, 1, 3]);
        expect({ foo: [1, 2], bar: [4, 89, 22] }).to.deep.equalInAnyOrder({ foo: [2, 1], bar: [4, 22, 89] });
        expect({ foo: ['foo-1', 'foo-2', [1, 2], null ] }).to.deep.equalInAnyOrder({ foo: [null, [1, 2], 'foo-1', 'foo-2'] });
        expect({ foo: [1, 2], bar: { baz: ['a', 'b', { lorem: [5, 6] }] } }).to.deep.equalInAnyOrder({ foo: [2, 1], bar: { baz: ['b', 'a', { lorem: [6, 5] }] } });
    });

    // stub spy and mock testing 



});

const obj={
    a:1,
    b:2,
    c:3,
    calc:function(a,b){
        return a+b;
    }
}

describe('sinon testing', () => {
    
    it('should call callback with arguments', () => {

        //stub function for obj.calc
        const stub = sinon.stub(obj, 'calc');
        console.log(stub);
        stub.returns(1,2);
        // console.log(stub);
        // const callback = sinon.spy();
        // obj.calc(3, 2, callback);
        // expect(
            
        // ).to.be.true;
        // stub.restore();

    });

    

});
