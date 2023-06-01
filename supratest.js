const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const app = require('./server');


// describe('GET /api/users', () => {
//     it('should return a list of users', (done) => {
//         request(app)
//             .get('/api/users')
//             .expect('Content-Type', /json/)
//             .expect(200)
//             .end((err, res) => {
//                 if (err) return done(err);
//                 const users = res.body;
//                 expect(users).to.be.an('array');
//                 expect(users.length).to.equal(2);
//                 expect(users[0].id).to.equal(1);
//                 expect(users[0].name).to.equal('John Doe');
//                 expect(users[1].id).to.equal(2);
//                 expect(users[1].name).to.equal('Jane Smith');
//                 done();
//             });
//     });
// });

// describe('GET /api/users', () => {
//     it('should return a list of users', async (done) => {
//         try {
//             const response = await request(app).get('/api/users');
//             expect(response.status).to.equal(200);
//             expect(response.type).to.equal('application/json');
//             expect(response.body).to.be.an('array');
//             expect(response.body.length).to.equal(2);
//             expect(response.body[0]).to.have.property('id', 1);
//             expect(response.body[0]).to.have.property('name', 'John Doe');
//             expect(response.body[1]).to.have.property('id', 2);
//             expect(response.body[1]).to.have.property('name', 'Jane Smith');
//             done();
//         } catch (error) {
//             done(error);
//         }
//     });
// });


describe('GET /api/users', () => {
    // it('should return a list of users', (done) => {
    //     (async () => {
    //         try {
    //             const response = await request(app).get('/api/users');
    //             expect(response.status).to.equal(200);
    //             expect(response.type).to.equal('application/json');
    //             expect(response.body).to.be.an('array');
    //             expect(response.body.length).to.equal(2);
    //             expect(response.body[0]).to.have.property('id', 1);
    //             expect(response.body[0]).to.have.property('name', 'John Doe');
    //             expect(response.body[1]).to.have.property('id', 2);
    //             expect(response.body[1]).to.have.property('name', 'Jane Smith');
    //             done();
    //         } catch (error) {
    //             done(error);
    //         }
    //     })();
    // });

    // it('should return a user by ID', async () => {
    //     const userId = 1;
    //     const response = await request(app).get(`/api/users/${userId}`);
    //     expect(response.status).to.equal(100);
    //     expect(response.type).to.equal('application/json');
    //     expect(response.body).to.have.property('id', userId);
    //     expect(response.body).to.have.property('name', 'John Doe');
    // });

    // it('should create a new user', async () => {
    //     const newUser = {
    //         name: 'John Doe',
    //         email: 'johndoe@example.com',
    //     };

    //     const response = await request(app)
    //         .post('/api/users')
    //         .send(newUser);

    //     expect(response.status).to.equal(201);
    //     expect(response.type).to.equal('application/json');
    //     expect(response.body).to.have.property('id');
    //     expect(response.body).to.have.property('name', newUser.name);
    //     expect(response.body).to.have.property('email', newUser.email);
    // });

    it('should return 400 if required fields are missing', async () => {
        const newUser = {
            email: 'janedoe@example.com',
        };

        const response = await request(app)
            .post('/api/users')
            .send(newUser);

        expect(response.status).to.equal(400);
        expect(response.type).to.equal('application/json');
        expect(response.body).to.have.property('error', 'Name and email are required');
    });

    // it('should handle errors', (done) => {
    //     request(app)
    //         .get('/api/register')
    //         .expect(404)
    //         .end((err, res) => {
    //             console.log(err)
    //             if (err) return done(err);
    //             expect(res.body).to.have.property('error', 'Not Found');
    //             done();
    //         });
    // });

    // it('should routes not found', (done) => {
    //     (async () => {
    //         try {
    //             const response = await request(app).get('/api/registers');
    //             expect(response.status).to.equal(404);
    //             expect(response.type).to.equal('application/json');
    //             done();
    //         } catch (error) {
    //             done(error);
    //         }
    //     })();
    // });
});

