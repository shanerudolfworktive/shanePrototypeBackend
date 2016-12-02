var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var v1Routes = require('./routes/v1Routes');
app.use('/api/v1', v1Routes);

var portNumber = process.env.PORT || 3000;
app.listen(portNumber);
console.log("server is listening at " + portNumber);