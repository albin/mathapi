var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);
/*
This comment will tell you how the test will be constructed.
Add your test below, you need three test's (it), what they will check on your math object is up to you.
Follow the structure down below in the commented section, just an example how to test math-min gives a number.
Server port is on 3000

*/
/*

//Marcus W
var number1 = 1;
var number2 = 2;
var result = number1 + number1;

it('should show if result equals number, when adding', function(done){
		chai.request('http://127.0.0.1:3000').get('/min/' + number1 + '/' + number2).end(function(err, res){

			res.should.have.status(200);

			res.should.be.json;

			res.body.result.should.be.an('number');

			done();
		});
	});

//End
*/
/*Add your describe here, dont forget that you need 3 it(). Here is a template:

describe('Function name', function(){
	it();
	it();
	it();
});

*/

describe("Pythagora's Theorem' by Derek", function(){
	it('should return a SINGLE object with status OK on /pyth/<a>/<b>/<c> GET', function (done){
		chai.request('http://127.0.0.1:3000').get('/pyth/3/b/5').end(function (err, res){
			res.should.have.status(200);
			res.should.be.json;
			res.body.should.be.an('object');
			res.body.should.have.property('status');
			res.body.status.should.be.a('string');
			res.body.status.should.equal('OK')
			res.body.should.have.property('result');
			res.body.result.should.be.a('number');
			done();
		})
	});
	it('should return a SINGLE object with status OK on /pyth/<a>/<b>/<c> GET', function (done){
		chai.request('http://127.0.0.1:3000').get('/pyth/3.5/b/5.3').end(function (err, res){
			res.should.have.status(200);
			res.should.be.json;
			res.body.should.be.an('object');
			res.body.should.have.property('status');
			res.body.status.should.be.a('string');
			res.body.status.should.equal('OK')
			res.body.should.have.property('result');
			res.body.result.should.be.a('number');
			done();
		})
	});
	it('should return a SINGLE object with status ERR on /pyth/<a>/<b>/<c> GET', function (done){
		chai.request('http://127.0.0.1:3000').get('/pyth/a/b/c').end(function (err, res){
			res.should.have.status(200);
			res.should.be.json;
			res.body.should.be.an('object');
			res.body.should.have.property('status');
			res.body.status.should.be.a('string');
			res.body.status.should.equal('ERR')
			done();

		});
	});
});


//Mayra 
var x= 1;
var result = x;


describe('Math.ceil, by Mayra', function() {

	it('should load the resultat of Math.ceil: with status OK ' + x, function(done) { 
		chai.request('http://127.0.0.1:3000').get('/ceil/' + x ).end(function(ERR, res) {
			
			res.should.have.status('200');

			res.should.be.json;

			res.body.Result.should.be.an('number');

			done();
		});
	});
    
    it('should load the resultat of Math.ceil: 1B with status Error', function(done) { 

		chai.request('http://127.0.0.1:3000').get('/ceil/1b'   ).end(function(ERR, res) {
			
			res.should.have.status('200');

			res.should.be.json;
         
            		res.body.should.be.an('object');

			done();
		});
	});
    
    it('should load the resultat of Math.ceil: 1,2 with status OK', function(done) { 

		chai.request('http://127.0.0.1:3000').get('/ceil/1,2' + x ).end(function(ERR, res) {
			
			res.should.have.status('200');

			res.should.be.json;

			res.body.Result.should.be.an('number');

			done();
		});
	});

});
describe('GET volume for a box', function() {
	it('Should GET a single object with status OK on volume/box/1/2/3', function(done) { 
		chai.request('http://localhost:3000').get('/volume/box/1/2/3').end(function(err, res) {
			res.should.have.status('200');
			res.should.be.json;
			res.body.should.be.an('object');
			res.body.should.have.property('status');
			res.body.status.should.equal('OK');
			res.body.should.have.property('answer');
			res.body.answer.should.be.a('number');
			done();
		});
	});
	it('Should GET Volume for a cylinder with status OK', function(done) {
		chai.request('http://localhost:3000').get('/volume/cyl/3.5/5.5/6.2').end(function(err, res) {
			res.should.have.status('200');
			res.should.be.json;
			res.body.status.should.equal('OK');
			res.body.should.have.property('answer');
			res.body.answer.should.be.a('number');
			done();
		});
	});
	it('Should respond with ERR if any metric is a negative number', function(done) {
		chai.request('http://localhost:3000').get('/volume/cone/1/-5/6').end(function(err, res) {
			res.should.have.status('500');
			res.should.be.json;
			res.body.should.be.an('object');
			res.body.should.have.property('status');
			res.body.status.should.equal('ERR');
			done();
		});
	});
	it('Should respond ERR if any metric is NaN', function(done) {
		chai.request('http://localhost:3000').get('/volume/sphere/abs').end(function(err, res) {
			res.should.have.status('500');
			res.should.be.json;
			res.body.should.be.an('object');
			res.body.should.have.property('status');
			res.body.status.should.equal('ERR');
			done();
		});
	});
});
//Andreas Romlin sqrt(x)
describe('Square root Math.sqrt(x) of positive number', function() {
	it('should return a number on correct input', function(done) {
		chai.request('http://127.0.0.1:3000')
		.get('/sqr/36')
		.end(function(err, res) {
			res.should.have.status(200);
			res.should.be.json;
			res.body.status.should.equal('OK');
			res.body.answer.should.be.a('number');
			done();
		});
	});
	it('should return answer on negative input', function(done) {
		chai.request('http://127.0.0.1:3000')
		.get('/sqr/-36')
		.end(function(err, res) {
			res.should.have.status(200);
			res.should.be.json;
			res.body.status.should.equal('OK');
			done();
		});
	});
	it('should return error on input other than number', function(done) {
		chai.request('http://127.0.0.1:3000')
		.get('/sqr/abc')
		.end(function(err, res) {
			res.should.have.status(400);
			res.should.be.json;
			res.body.status.should.equal('ERR');
			res.body.info.should.be.a('string');
			done();
		});
	});
	it('should replace , with . on input', function(done) {
		chai.request('http://127.0.0.1:3000')
		.get('/sqr/3,6')
		.end(function(err, res) {
			res.should.have.status(200);
			res.should.be.json;
			res.body.status.should.equal('OK');
			res.body.answer.should.be.a('number');
			done();
		});
	});

});

// Jarl H Lindquist Math.pow(x,y) - test 
describe('testing to make sure that all test works on pow', function(){
	
	it('Should return an object with status OK and resultat : resultat on /pow/1/3', function(done){
		chai.request('http://127.0.0.1:3000')
		.get('/pow/1/2')
		.end(function(err,res){
			res.should.have.status(200);
			res.should.be.json;
			res.body.should.be.an('object');
			res.body.should.have.property('status');
			res.body.should.have.property('result');
			res.body.status.should.equal('OK');
			res.body.result.should.be.a('number');

			done();
		})
	})
	var number1 = Math.random();
	var number2 = Math.random();
	console.log(number1);
	console.log(number2);

	it('Should return an object with status OK and resultat : resultat on /pow/randomNumber/randomNumber', function(done){
		chai.request('http://127.0.0.1:3000')
		.get('/pow/' + number1 + '/' + number2)
		.end(function(err,res){
			res.should.have.status(200);
			res.should.be.json;
			res.body.should.be.an('object');
			res.body.should.have.property('status');
			res.body.should.have.property('result');
			res.body.status.should.equal('OK');
			res.body.result.should.be.a('number');

			done();
		})
	})
	it('Should return an object with status Err on /pow/b/4', function(done){
		chai.request('http://127.0.0.1:3000')
		.get('/pow/b/3')
		.end(function(err,res){
			res.should.have.status(200);
			res.should.be.json;
			res.body.should.be.an('object');
			res.body.should.have.property('status');
			
			res.body.status.should.equal('Err');
		
			done();
		})
	})

	it('Trying for an page that is not existing', function(done){
		chai.request('http://127.0.0.1:3000')
		.get('/noneexistingpagethatisnotavailable/' )
		.end(function(err,res){
			res.should.have.status(404);
			

			done();
		})
	})
})

// Patricios Test här nere
describe('Test of Radius of a circle, by Patricio Vergara', function(){

	it('should work if the user gives a positive number with GET /radie/:x', function (done){

		var num1 = Math.round((Math.random() * 10) + 1);

		chai.request('http://127.0.0.1:4000').get('/radie/' + num1).end(function(err, res){

			res.should.have.status(200);

			res.should.be.json;

			res.body.should.be.an('object');

			res.body.status.should.equal('OK');

			res.body.result.should.be.a('number');

			done();

		});

	});

	it('should not work if the user gives a string with GET /radie/:x', function (done){

		var minString = "String";

		chai.request('http://127.0.0.1:4000').get('/radie/' + minString).end(function(err, res){

			res.should.have.status(200);

			res.should.be.json;

			res.body.should.be.an('object');

			res.body.status.should.equal('ERROR');

			res.body.messege.should.be.a('string');

			done();

		});

	});

	it('should not work if the user gives a negative number with GET /radie/:x', function (done){

		var negativeNum = (Math.round((Math.random() * 10) + 1)) * -1;

		chai.request('http://127.0.0.1:4000').get('/radie/' + negativeNum).end(function(err, res){

			res.should.have.status(200);

			res.should.be.json;

			res.body.should.be.an('object');

			res.body.status.should.equal('ERROR');

			res.body.messege.should.be.a('string');

			done();

		});

	});

});		
