var should = require("should");
var request = require('request');
var expect = require("chai").expect;
var baseUrl = "https://swapi.co/api/";

describe('return luke', function(){
	it('return luke', function(done){
		request.get({url: baseUrl + 'people/1'}, function(err, res, body){
			expect(res.statusCode).to.equal(200);
			console.log(body);
			done();
		});
	});
});