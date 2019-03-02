var express=require('express');
var Request = require("request");

var router=express.Router();


router.get('/close', function(req,res){
    client.close()
    console.log("disconnected!!!")
    
   });