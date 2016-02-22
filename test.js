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

		chai.request('http://127.0.0.1:3000').get('/radie/' + num1).end(function(err, res){

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

		chai.request('http://127.0.0.1:3000').get('/radie/' + minString).end(function(err, res){

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

		chai.request('http://127.0.0.1:3000').get('/radie/' + negativeNum).end(function(err, res){

			res.should.have.status(200);

			res.should.be.json;

			res.body.should.be.an('object');

			res.body.status.should.equal('ERROR');

			res.body.messege.should.be.a('string');

			done();

		});

	});


});		


// Sara Test här nere
describe('test av divide x och y och multiply med z', function(){

	it('should responde with a number', function (done){

		

		chai.request('http://127.0.0.1:3000').get('/calculon/3/10/6').end(function(err, res){

});	

describe("Circumference of circle by radius", function(){
	it('should return an object with status OK and circumference on GET: /circumference/radius', function (done){
		chai.request('http://127.0.0.1:3000').get('/circumference/10').end(function (err, res){
			res.should.have.status(200);
			res.should.be.json;
			res.body.should.be.an('object');
			res.body.should.have.property('status');
			res.body.status.should.be.a('string');
			res.body.status.should.equal('OK')
			res.body.should.have.property('answer');
			res.body.answer.should.be.a('number');
			done();
		});
	});
});	


//Alexander W
describe('Math MAX by Alexander W', function() {
	it('Should return the highest number of two given numbers /max/<nr1>/<nr2> GET', function(done) {
		chai.request('http://127.0.0.1:3000')
		.get('/max/10/100/')
		.end(function(err, res) {


			res.should.have.status(200);

			res.should.be.json;


			res.body.should.be.an('object');

		
			res.body.svar.should.equal(5);
			res.body.svar.should.be.a('number');

			done();

		});

	});

	it('should not work if one variable isNaN', function (done){


		chai.request('http://127.0.0.1:3000').get('/calculon/4/2/ha').end(function(err, res){

			res.should.have.status(404);

			res.should.be.json;

			res.body.should.be.an('object');

			res.body.status.should.equal('error');

			res.body.status.should.be.a('string');

			done();

		});

	});

	it('should work and result in a number', function (done){

		

		chai.request('http://127.0.0.1:3000').get('/calculon/-2/6/-4').end(function(err, res){

			res.should.have.status(200);

			res.should.be.json;

			res.body.should.be.an('object');

			res.body.svar.should.equal(3);

			res.body.svar.should.be.a('number');

			done();

		});

	});

});		

			res.should.be.number;
			
			res.body.should.be.an('object');
			
			res.body.should.have.property('status');
			
			res.body.status.should.equal('OK');

			done();
		});
	});
		it('Should return an ERROR for not being a number', function(done) {
		chai.request('http://127.0.0.1:3000')
		.get('/max/a/2/')
		.end(function(err, res) {

			res.should.have.status(200);

			res.should.be.json;

			res.should.be.number;
			
			res.body.should.be.an('object');
			
			res.body.should.have.property('status');
			
			res.body.status.should.equal('ERROR');

			done();
		});
	});
		it('Testing for a page that does not exist', function(done) {
		chai.request('http://127.0.0.1:3000')
		.get('/max/x/y/z')
		.end(function(err, res) {

			res.should.have.status(404);

			done();
		});
	});
});


//Jason Math Tan
describe('Math Tan', function() {
	it('should load the resultat of Math.tan: with status OK  /tan GET' , function(done) { // <- done is a function passed by chai that we call when we've made sure everything works
		chai.request('http://127.0.0.1:3000')
		.get('/tan/1' )
		.end(function(err, res) {
			res.should.have.status(200);
			res.should.be.json;
			res.body.should.be.an('object');
			res.body.should.have.property('status');
			res.body.status.should.equal('OK');

			done();
		});
	});

	it('should load the resultat of Math.tan:a with status Error  /tan GET' , function(done) { // <- done is a function passed by chai that we call when we've made sure everything works
		chai.request('http://127.0.0.1:3000')
		.get('/tan/a' )
		.end(function(err, res) {
			res.body.status.should.be.a('string');
			res.body.status.should.equal('Err');
			res.body.should.have.property('status');
			done();
		});
	});
	it('should return negative input: with status OK  /tan GET' , function(done) { // <- done is a function passed by chai that we call when we've made sure everything works
		chai.request('http://127.0.0.1:3000')
		.get('/tan/-10' )
		.end(function(err, res) {
			res.should.have.status(200);
			res.should.be.json;
			res.body.should.be.an('object');
			res.body.should.have.property('status');
			res.body.status.should.equal('OK');

			done();
		});
	});
});

	
// Monas Test 
describe('Test of Multiply the two number and division on other number', function(){

	it('should responde with a number', function (done){

		chai.request('http://127.0.0.1:3000').get('/calculon/5/3/3' ).end(function(err, res){

			res.should.have.status(200);

			res.should.be.json;

			res.body.should.be.an('object');

			res.body.svar.should.be.a('number');

			done();

		});

	});

	it('should not work if one variable isNaN', function (done){

		var minString = "String";

		chai.request('http://127.0.0.1:3000').get('/calculon/4/2/a').end(function(err, res){

			res.should.have.status(404);

			res.should.be.json;

			res.body.should.be.an('object');

			res.body.status.should.equal('ERR');

			res.body.status.should.be.a('string');

			done();

		});

	});


	it('should work and result in a number', function (done){

		chai.request('http://127.0.0.1:3000').get('/calculon/-2/6/-4').end(function(err, res){

			res.should.have.status(200);

			res.should.be.json;

			res.body.should.be.an('object');

			res.body.svar.should.equal(3);

			done();

		});

	});
});

//Math Round, Nadim.
describe('returns the value of a number rounded to the nearest integer.', function() {
	it('should return a number on correct input', function(done) {
		chai.request('http://localhost:3000')
		.get('/round/15,5')
		.end(function(err, res) {
			res.should.have.status(200);
			res.should.be.json;
			res.body.status.should.equal('OK');
			res.should.be.number;
			done();
		});
	});
	it('should return error on input other than number', function(done) {
		chai.request('http://localhost:3000')
		.get('/round/abc')
		.end(function(err, res) {
			res.should.have.status(200);
			res.should.be.json;
			res.body.status.should.equal('ERR');
			done();
		});
	});
	it('should return 404 on page not avalible', function(done){
		chai.request('http://localhost:3000')
		.get('/pageNotFound/' )
		.end(function(err,res){
			res.should.have.status(404);
			

			done();
		});
	});

});



