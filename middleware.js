// middle ware functions  exmaple 

 var express = require("express");
 var app = express();

 app.get('/',function(req,res,next){
     next();
 })

 app.listen(3000);