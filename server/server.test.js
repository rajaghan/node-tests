const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect({
          error: 'Page Not Found'
        })
        .end(done);
    });
  });
  describe('GET /users', () => {
    it('should check if user raj exists', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Raj',
            age: 38
          });
        })
        .end(done);
    });
  });
});
