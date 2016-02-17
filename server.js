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
Atleast two inputs for each function.
Float numbers seperated by ".", example /pow/1.5/2.5

Example down below, how marcus made his get on math.min.
*/

app.get('/low/:number1/:number2', function (req, res){
	var number1 = parseInt(req.params.number1);
	var number2 = parseInt(req.params.number2);

	if(isNaN(number1) === true || isNaN(number2) === true){

		res.json({ status: "ERR"});

	} else {
	
	var total = Math.min(number1, number2);
	res.json({status: "Ok", result: total});

	}
});

app.use(express.static("public"));

app.use('/', router);
app.listen(port);
console.log('Up and runing at port' + port);


