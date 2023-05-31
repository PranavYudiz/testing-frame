const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Student = require('./s');

const studentObj = new Student('Raj', 20);

// describe('spy ', function () {

//     it("return check", function () {
//         expect(studentObj.userId()).to.be.equal(12);
//     })

//     it("function count", function () {
//         // const spyo=sinon.spy(studentObj,'getInfo');
//         // spyo.home(5)
//         //     expect(spyo.callCount).to.be.equal(1);
//         // how many times function call

//         const spyo = sinon.spy(studentObj, 'getInfo');
//         studentObj.home(5)
//         // expect(spyo.calledOnce).to.be.true;//callTwice callThric

//         expect(spyo.calledWith(5, 1)).to.be.true;

//         // expect(spyo.returned(10)).to.be.true;

//         // expect(spyo.returned(15)).to.be.false;

//         // restore the function
//         spyo.restore();


//     })


// })




// stub 

// describe('stub ', function () {

//     it("check", function () {
//         const stub = sinon.stub(studentObj, 'getExternalMarks');

//         stub.withArgs(40).returns(6);
//         expect(studentObj.finalMarks(40)).to.be.equal(56);

//         //restore the function
//         stub.restore();
//     })

// })




// describe('mock ', function () {

//     it("check count function ", function () {
//         const mock = sinon.mock(studentObj);

//         const expect = mock.expects('getExternalMarks')
//         expect.exactly(2);
//         expect.withArgs(41).returns(6);
//         studentObj.finalMarks(41);
//         // mock.restore();
//         mock.verify();
//     })

// })


describe("withArgs", function () {
    it("should call method once with each argument", function () {
        const object = { method() { } };
        const spy = sinon.spy(object, "method");

        object.method(42);
        object.method(1);

        expect(spy.withArgs(42).calledOnce).to.be.true;
        expect(spy.withArgs(5).calledOnce).to.be.true;
    });

    it("should restore values", function () {
        const myObj = {
            example: "oldValue",
        };

        const stub = sinon.stub(myObj, "example").value("newValue");
        stub.restore();

        expect(myObj.example).to.equal("newValue");
    });
});



// describe("fakes", function () {
//     it("should fakes", function () {
//         const foo = {
//             bar: () => "baz",
//         };
//         // const fake = sinon.replace(foo, "bar", sinon.fake(foo.bar));
//         // const fake = sinon.replace(foo, "bar", sinon.fake.returns("fake value"));

//         // expect(fake()).to.be.equal("baz");
//         // expect(fake.callCount).to.be.equal(1);

//         const fake = sinon.fake.returns("42");

//         sinon.replace(console, "log", fake);

//         expect(console.log("apple pie")).to.be.equal("42");

//         sinon.restore();


//         expect(console.log("apple pie")).to.be.undefined;
//         expect(fake.callCount).to.be.equal(1);
//     });
// })


describe("fakes", function () {
    const calc = {
        add: (a, b) => a + b
    }

    it("should fakes", function () {
        const fake = sinon.fake.returns(42);
        sinon.replace(calc, "add", fake);
        expect(calc.add(1, 2)).to.be.equal(42);
        expect(fake.callCount).to.be.equal(1);
        sinon.restore();
        expect(calc.add(1, 2)).to.be.equal(3);
    })
});


