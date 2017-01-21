var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var busboy = require('connect-busboy');
// var hbs = require('hbs');
var ejs = require('ejs');
var masterServer = null;
var router = express.Router();
var app = express();

app.setMaster = function (server) {
    masterServer = server;
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
app.set('view engine', 'ejs');

// uncomment to use a banner
//app.locals.banner = '/img/banner.png';

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(logger('dev'));
// app.use(busboy({limits: {fileSize: 512 * 1024}}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', '..', 'client')));
console.log('kkk1');
/* GET home page. */
router.get('/', function(req, res) {
console.log('kkk');
  	res.render('index', { title: 'index' });
});

app.get('/game', function (req, res, next) {
    res.redirect('./../../client/0');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
