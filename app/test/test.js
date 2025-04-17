const { describe, it } = require('node:test');
var request = require('supertest');
var app = require('../server.js');
describe('GET /', function() {
    it('respond with default hello message', function(done) {
        request(app).get('/').expect('{ "response": "Hello from the Node.js app!" }', done);
    });
});
