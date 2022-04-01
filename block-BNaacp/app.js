var express = require('express');

var mongoose = require('mongoose');


var User = require('./models/user');

var app = express();



mongoose.connect('mongodb://127.0.0.1:27017/sample',(err)=>{
    console.log(err ? err : "connected");
})

//middleWares
app.use(express.json());


app.post('/users',(req,res)=>{
    console.log(req.body);
    User.create(req.body,(err,user)=>{
        console.log(err);
        res.json(user);
    })
})


app.get('/users',(req,res)=>{
    User.find({},(err,user)=>{
        console.log(err,user);
        res.json(user);
    })
})

app.get('/users/:id',(req,res)=>{
    var id = req.params.id;
    User.findById(id,(err,user)=>{
        console.log(err,user);
        res.json(user);
    })
})

app.get('/users',(req,res)=>{
    // var id = req.params.id;
    User.findOne( {"name" : "adarsh"},(err,user)=>{
        console.log(err,user);
        res.json(user);
    })
})


app.put('/users/:id',(req,res)=>{
    console.log(req.body);
    var id = req.params.id;
    User.findByIdAndUpdate(id,req.body,{new:true},(err,updateuser)=>{
        console.log(err);
        res.json(updateuser)
    })
})


app.put('/users',(req,res)=>{
    console.log(req.body);
    //var id = req.params.id;
    User.findOneAndUpdate({"email" : "adarshraj2721@gmail.com"},req.body,{new:true},(err,updateuser)=>{
        console.log(err);
        res.json(updateuser)
    })
})

app.delete('/users/:id',(req,res)=>{
    User.findByIdAndDelete(req.params.id,(err,deleteuser)=>{
        res.send(`${deleteuser} was deleted`)
    })
})





app.listen(5000,()=>{
    console.log('WELCOME');
})