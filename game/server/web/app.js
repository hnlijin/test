var express = require('express');
var path = require('path');
var ejs = require('ejs');
// var hbs = require('hbs')
var fs = require('fs');
var masterServer = null;
var app = express();
var common = require('./../common');

module.exports = app;

app.setMaster = function (server) {
    masterServer = server;

    var ip = common.getLocalIp();

    var gameConfigPath = __dirname + '/../../client/game/resource/config/gameconfig.json';
    var playerConfigPath = __dirname + '/../../client/player/resource/config/gameconfig.json';
    var gameConfigData = fs.readFileSync(gameConfigPath, "utf-8");
    var playerConfigData = fs.readFileSync(playerConfigPath, "utf-8");
    var gameConfig = JSON.parse(gameConfigData);
    var playerConfig = JSON.parse(playerConfigData);
    gameConfig.host = ip;
    playerConfig.host = ip;
    gameConfigData = JSON.stringify(gameConfig);
    playerConfigData = JSON.stringify(playerConfig);
    fs.writeFileSync(gameConfigPath, gameConfigData);
    fs.writeFileSync(playerConfigPath, playerConfigData);
};

// app.set('views', __dirname + '/views');
// app.set('view engine', 'html');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/../../client'));

app.get('/1', function(req, res) {
	res.render('index', {title:'hello world'});
	//res.send('hello world');
});
