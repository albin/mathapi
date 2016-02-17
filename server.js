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



*/
app.get('/volume/:type/*', function(req, res) {
	var hello = "Hello";
	res.json(hello);

	var url = (req.url).split('/');
	
	console.log(url);

	switch(req.params.type) {
		case "cyl":
			break;
	}
});

app.use(express.static("public"));

app.use('/', router);
app.listen(port);
console.log('Up and runing at port' + port);


