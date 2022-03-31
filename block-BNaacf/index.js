var express = require('express');

var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://127.0.0.1:27017/test',(err)=>{
    console.log(err ? err : "connected");
})


app.listen(5000,()=>{
    console.log('WELCOME');
})