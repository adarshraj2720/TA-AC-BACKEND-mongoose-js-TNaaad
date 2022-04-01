var express = require('express');

var mongoose = require('mongoose');

var blog = require('./modals/blog')
var article = require('./modals/article')
var comment = require('./modals/comment')
var user = require('./modals/user')

var app = express();


mongoose.connect('mongodb://127.0.0.1:27017/test',(err)=>{
    console.log(err ? err : "Connected");
})



app.listen(5000,()=>{
    console.log('Welcome');
})