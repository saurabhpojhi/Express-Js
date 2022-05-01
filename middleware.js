// middle ware functions  exmaple 

//  var express = require("express");
//  var app = express();

//  app.get('/',function(req,res,next){
//      next();
//  })

//  app.listen(3000);

const express = require("express");
 const app = express();

app.use('/abc', express.static('public'));

// mylogger means middleware  

var mylogger = function(req,res,next){
    console.log("middelware working");
    next();
}

app.use(mylogger); // middelware define 

 app.get('/',function(req,res){
     res.send("hello middleware")
     
 })
 app.get('/users',function(req,res){
    res.send(" users hello middleware")
    
})

 app.listen(3000);