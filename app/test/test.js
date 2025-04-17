var app = require('../server.js')
var request = require("supertest");

test('basic request', () => {
    expect(request(app).get('/')).toBe("Hello from the Node.js app!");
  });
