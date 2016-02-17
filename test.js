var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);
/*
This comment will tell you how the test will be constructed.
Add you test bellow, you need three test's (it), what they will check on your math object is up too you.
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

describe('Data API', function(){
	/*Add your it here, dont forget that you need 3 seprate, keep em together and seperated by a comment with your name.*/	



});