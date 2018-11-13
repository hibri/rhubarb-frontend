var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var httpTimeout = 5000;

// TODO Frontend URL must be retrieve from Vault

var frontendURL = process.env.SMOKETEST_URL || 'http://localhost:1337';
if(! frontendURL.endsWith('/')){
  frontendURL = frontendURL + '/';
}
chai.use(chaiHttp);


describe('GET /', function () {
  this.timeout(httpTimeout);
  it('should return 200', function(done){
    chai.request(frontendURL)
    .get('/')
    .end(function(err, res) {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done();
    });
  });

});

describe('GET /health', function () {
  this.timeout(httpTimeout);
  it('should return status OK', function(done){
    chai.request(frontendURL)
    .get('/health')
    .end(function(err, res) {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.have.property('api');
      expect(res.body.api).to.equal('ok');
      done();
    });
  });

});
