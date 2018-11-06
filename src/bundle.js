'use strict';

var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://go-week:go-week123@ds217360.mlab.com:17360/go-week-database', { useNewUrlParser: true });

var PORT = 3000;
var app = express();

app.get('/', function (req, res) {
	return res.send('<h3>Hello World<h3>');
});

app.listen(PORT, function () {
	console.log('listening on localhost:' + PORT);
});
