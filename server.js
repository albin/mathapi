var express		= require('express');
var app 		= express();
var bodyParser	= require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();

/*
Routes will be added below.
All responses must be json.
All statuses must be "OK" if it works otherwise "ERR".
All responses needs a result.
At least two inputs for when its posible for each function.
Float numbers seperated by ".", example /pow/1.5/2.5

Example down below, how marcus made his get on math.min.
*/

//Olle
app.get('/volume/:type/*', function(req, res) {

	var url = (req.url).split('/');
	var ans;
	console.log(url);

	switch(req.params.type) {
		case "cyl":
			if(isNaN(url[3]) || url[3] === "" || isNaN(url[4]) || url[4] === "" || url[4] <= 0) {
				ans = "Metrics must be defined or a positive number. Input should be: cyl/radius/height";
				res.status(500);
				res.json({ status: "ERR", info: ans });
				break;
			}
			else {
				ans = Math.PI * Math.pow(url[3], 2) * url[4];
				res.json({ status: "OK", answer: ans });
				// V = pi * r^2*h
				break;
			}
		case "sphere": 
			if(isNaN(url[3]) || url[3] === "" || url[3] <= 0) {
				ans = "Metrics must be defined or a positive number. Input should be: sphere/radius";
				res.status(500);
				res.json({ status: "ERR", info: ans });
				break;
			}
			else{
				ans = (4 * Math.PI * Math.pow(url[3], 3))/3;
				res.json({ status: "OK", answer: ans });
				break;
			}
		case "box": 
			if(isNaN(url[3]) || url[3] === "" || url[3] <= 0 || isNaN(url[4]) || url[4] === "" ||
			url[4] <= 0 || isNaN(url[5]) || url[5] === "" || url[5] <= 0) {
				ans = "Metrics must be defined or a positive number. Input should be: box/width/height/depth";
				res.status(500);
				res.json({ status: "ERR", info: ans });
				break;
			}
			else {
				ans = url[3] * url[4] * url[5];
				res.json({ status: "OK", answer: ans });
				break;
			}
		case "cone":
			if(isNaN(url[3]) || url[3] === "" || isNaN(url[4]) || url[4] === "" || url[4] <= 0) {
				ans = "Metrics must be defined or a positive number. Input should be: cone/radius/height";
				res.status(500);
				res.json({ status: "ERR", info: ans });
				break;
			}
			else {
				ans = (1/3) * Math.PI * Math.pow(url[3], 2) * url[4];
				res.json({ status: "OK", answer: ans });
				break;
			}
		default:
				ans = "Unvalid figure, please enter one of the following geometrical figures: cyl for cylinder, sphere, box or cone!"
				res.status(404);
				res.json({ status: "ERR", info: ans });
	}
});


//add you app.get below the last input.
app.get('/low/:number1/:number2', function (req, res) {
	var number1 = parseInt(req.params.number1);
	var number2 = parseInt(req.params.number2);

	if (isNaN(number1) === true || isNaN(number2) === true) {

		res.json({ status: "ERR"});

	} else {
		
		var total = Math.min(number1, number2);

		res.json({status: "Ok", result: total});

	}
});


app.get('/pyth/:a/:b/:c', function (req, res){
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
		res.json({status: 'ERR'})
	}
});

// Jarl 
app.get('/pow/:base/:second', function(req,res){
	var base = parseFloat(req.params.base);
	var exponent = parseFloat(req.params.second);
	var resultat = Math.pow(base, exponent);

	if( isNaN(resultat) || resultat === null || resultat === undefined){
		res.json({status: "Err"});
	}
	else{
	res.json({
		status: "OK",
		result: resultat
	})
	}

});
//Mayra
app.get('/ceil/:x', function (req, res) {
    
    var x = Math.ceil(req.params.x.replace("," , ".")); 
	   if(isNaN(x)===true){
        res.json({Status: 'ERR'});
    
    }else{
        var result = Math.ceil(x);
        res.json({Status: 'OK', Result: result})
    }
});
//Andreas R
app.get('/sqr/:a', function(req, res) {

	var x = Math.sqrt(req.params.a.replace("," , "."));

	if(/^-/.test(req.params.a) === true) {
		var x = req.params.a.replace(/^-/, '');
		x = Math.sqrt(x);
		res.json({status: 'OK', answer: x + 'i'});
	}else if(isNaN(x) === true) {
		res.status(400);
		res.json({status: 'ERR', info: 'Input must be a number!'});
	} else {
		res.json({status: 'OK', answer: x});
	}
});

app.get('/radie/:x', function(req, res){  // Patricios funktion

	var area = parseFloat(req.params.x);
	var radie = Math.sqrt(area / Math.PI);

	if (isNaN(radie) === true) {

		res.json({status: "ERROR", messege: "Parameter is not a number or lower than 0"});

	}
	else
		res.json({status: "OK", result: radie});

});

//omkretesn på en cirkel (uträknad med hjälp av radien), av Martin Nilsson
app.get('/circumference/:radius', function(req, res){
	
	var radius = parseFloat(req.params.radius),
		circumference = (2*Math.PI)*radius;

	if(radius !== null && radius !== undefined && radius !== NaN && radius !== 0 && radius > 0){
		res.json({status: 'OK', answer: circumference});
	} else{
		res.json({status: "error"});
	}
});

app.get("/calculon/:x/:y/:z", function(req, res){
	var x= req.params.x;
	var y= req.params.y;
	var z= req.params.z;

	if(isNaN(parseInt(x)) !== false || isNaN(parseInt(y)) !== false || isNaN(parseInt(z)) !== false ) {
		res.status(404);
		res.json({status:"error"});

	}else{
		var svar= (x/y)*z;
		res.status(200);
		res.json({svar: svar});
		

	}
});

//Jason Math Tan

app.get('/tan/:number', function (req,res) {
	
  var number = parseFloat(req.params.number);
 
  var resultat = Math.tan(number);
 
  if(isNaN(resultat)){
  	res.json({ status: "Err"});
  }
 
  else{
  	res.json({

  	status : "OK",
  	resultat : resultat
  });
  }

});


//Alexander W
app.get('/max/:x/:y', function(req, res) {
 
	var x = parseFloat(req.params.x);
	var y = parseFloat(req.params.y);   
  	
    if(isNaN(x) || isNaN(y)) {
	
        res.json({status: 'ERROR'});
    
    }else{
	
        var result = Math.max(x, y);
		
        res.json({status: 'OK', result: result});
		
    }
});


//Nadim math-round
app.get('/round/:x', function (req, res){
 
 x = parseFloat(req.params.x.replace(",","."));
 //y = parseFloat(req.params.y.replace(".",".");     	
    if(isNaN(x)===true){
        res.json({status: 'ERR'});
    
    }else{
        var result = Math.round (x);
        res.json({status: 'OK', result: result})
    }
});




//Dont add anything below this line.
app.use(express.static("public"));
app.use('/', router);
app.listen(port);
console.log('Up and runing at port' + port);


