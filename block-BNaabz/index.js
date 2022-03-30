var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect("mongodb://localhost/sample"),(err)=>{
    console.log(err ? err :"Connected to Database");
}

app.listen(5000,()=>{
    console.log('WELCOME');
})