
var express = require('express');
var app = express();
var food = require('./food');
var path = require('path');
const ejs = require("ejs");

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set("view engine", "html");


app.get('/', function(req, res){
    res.render('index');
});

app.get('/food/', food.get);

app.get('/inventario', function(req, res){
  res.render('inventario');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
