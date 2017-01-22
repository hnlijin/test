var express = require('express');
var path = require('path');
var ejs = require('ejs');
var masterServer = null;
var app = express();

module.exports = app;

app.setMaster = function (server) {
    masterServer = server;
};

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../../client/0'));

app.get('/1', function(req, res) {
	res.render('index', {title:'hello world'});
	//res.send('hello world');
});
