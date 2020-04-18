
var express = require('express');
var app = express();
var food = require('./food');
var path = require('path');
const ejs = require("ejs");

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set("view engine", "html");


app.get('/', function(req, res){
    res.render('index', {'title': 'Inicio'});
});

app.get('/food/', food.get);

app.get('/inventario', function(req, res){
  res.render('inventario', {title : 'Inventario'});
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT);
});
