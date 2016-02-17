var express		= require('express');
var app 		= express();
var bodyParser	= require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();



app.use(express.static("public"));

app.use('/', router);
app.listen(port);
console.log('Up and runing at port' + port);


