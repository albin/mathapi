var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);
/*
This comment will tell you how the test will be constructed.
Add your test below, you need three test's (it), what they will check on your math object is up to you.
Follow the structure down below in the commented section, just an example how to test math-min gives a number.


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
			res.should.have.status('200');
			res.should.be.json;
			res.body.should.be.an('object');
			res.body.should.have.property('status');
			res.body.status.should.equal('ERR');
			done();
		});
	});
	it('Should respond ERR if any metric is NaN', function(done) {
		chai.request('http://localhost:3000').get('/volume/sphere/abs').end(function(err, res) {
			res.should.have.status('200');
			res.should.be.json;
			res.body.should.be.an('object');
			res.body.should.have.property('status');
			res.body.status.should.equal('ERR');
			done();
		});
	});
});
		