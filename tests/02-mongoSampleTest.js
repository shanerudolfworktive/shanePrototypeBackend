var should = require("should");
var request = require('supertest');
var expect = require("chai").expect;
var baseUrl = "http://localhost:3000/api/v1/";

describe('test mongoSample get', function(){
	it('test mongoSample get', function(done){
		request(baseUrl)
		.get('mongoSample')
		.expect(200)
		.expect(function(res){
			console.log(res.body);
		})
		.end(function(err, res) {
			done();
		});
	});
});

describe('test mongoSample post', function(){
	it('test mongoSample get', function(done){
		request(baseUrl)
		.post('mongoSample')
		.send({"name": "tom","age": 6,"gender": "female"})
		.expect(200)
		.end(function(err, res) {
			var json = JSON.parse(res.text);
			json.name.should.be.equal('tom');
			json.age.should.be.equal(6);
			json.gender.should.be.equal('female');
			done();
		});
	});
});