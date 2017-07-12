const request = require('supertest');
const app = require('./app');

describe('GET /user', function() {
  it('user.name should be an case-insensitive match for "tobi"', function(done) {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect(res => { 
        res.body.id = 'some fixed id';
        res.body.name = res.body.name.toUpperCase();
      })
      .expect(200, {
        id: 'some fixed id',
        name: 'TOBI'
      }, done);
  });
});