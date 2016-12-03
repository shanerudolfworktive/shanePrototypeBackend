var should = require("should");
var request = require('request');
var expect = require("chai").expect;
var baseUrl = "http://localhost:3000/api/v1/";

describe('return mongoSample', function(){
	it('return mongoSample', function(done){
		request.get({url: baseUrl + 'mongoSample'}, function(err, res, body){
			expect(res.statusCode).to.equal(200);
			console.log(body);
			done();
		});
	});
});