require('should');
require('should-http');
var app, server, request;


describe('GET /', function () {
    beforeEach(function (done) {
        request = require('supertest');
        app = require('../../server').app;
        server = require('../../server').server;
        done();
    });

    afterEach(function () {
        server.close();
    });

    it('should have an index page', function(done){
        request(app)
            .get('/')
             .end(function (err, res) {
                res.should.have.status(200);
                done();
            });

    });

});