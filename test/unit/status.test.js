var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var status = require('../../app/status');

describe('Routes', function() {
  describe('GET Status', function() {

      it('should respond', function() {
        var req,res,spy;

        req = res = {};
        spy = res.send = sinon.spy();

        status(req, res);

        expect(spy.calledOnce).to.equal(true);
      });     

  });
});