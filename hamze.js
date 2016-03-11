app.get("/manh/:p/:q", function (req, res) {
			
	var p = req.params.p.split(".");
	var q = req.params.q.split(".");
	
​
	if(isNaN(parseInt(p[0])) !== false || isNaN(parseInt(p[1])) !== false || isNaN(parseInt(q[0])) !== false || isNaN(parseInt(q[1])) !== false) {
		res.status(404);
		res.json({status: "Error"});
​
	}else {
		var distance = Math.abs(p[1]-p[0]) + Math.abs(q[1]-q[0]);
		res.status(200)
		res.json({answer: distance, status: "OK"});
	}
});
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
describe("Manhattan-distance by Hamzeh ", function(){
	it('should return a number and status OK', function (done){
		chai.request('http://127.0.0.1:3000').get('/manh/3.0/4.1').end(function (err, res){
			res.should.have.status(200);
			res.should.be.json;
			res.body.should.be.an('object');
			res.body.should.have.property('status');
			res.body.status.should.be.a('string');
			res.body.status.should.equal('OK')
			res.body.should.have.property('answer');
			done();
		})
	});
	it('should return a SINGLE object with status OK on /pyth/<a>/<b>/<c> GET', function (done){
		chai.request('http://127.0.0.1:3000').get('/manh/6.6/9.9').end(function (err, res){
			res.should.have.status(200);
			res.should.be.json;
			res.body.should.be.an('object');
			res.body.should.have.property('status');
			res.body.status.should.be.a('string');
			res.body.status.should.equal('OK')
			res.body.should.have.property('answer');
			done();
		})
	});
	it('should return a SINGLE object with status ERR on /pyth/<a>/<b>/<c> GET', function (done){
		chai.request('http://127.0.0.1:3000').get('/manh/4.9/a.3').end(function (err, res){
			res.should.have.status(404);
			res.should.be.json;
			res.body.should.be.an('object');
			res.body.should.have.property('status');
			res.body.status.should.be.a('string');
			res.body.status.should.equal('Error')
			done();
​
		});
	});
});
​