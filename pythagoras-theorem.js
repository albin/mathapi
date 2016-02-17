app.get('/pyth/:a/:b/:C', function (req, res){
	var a = parseFloat(req.params.a);
	var b = parseFloat(req.params.b);
	var c = parseFloat(req.params.c);
	var result;
	if (isNaN(a) && !isNaN(b) && !isNaN(c)) {
		result = Math.sqrt((c*c)-(b*b));
		res.json({status: 'OK', result: result});
	}
	else if (!isNaN(a) && isNaN(b) && !isNaN(c)) {
		result = Math.sqrt((c*c)-(a*a));
		res.json({status: 'OK', result: result});
	}
	else if (!isNaN(a) && !isNaN(b) && isNaN(c)) {
		result = Math.sqrt((a*a)+(b*b));
		res.json({status: 'OK', result: result});
	}
	else{
		res.json(status: 'ERROR! Wrong input.')
	}


});