var express=require('express');
var Request = require("request");
var db = require('../Databases/index')

var router=express.Router();

router.get('/getAllFarmers', function(req,res){
 db.query('SELECT * from Farmers', (err, result) => {
    if (err) {
      console.log(err.stack)
    } else {
      res.send(result.rows)
    }
  })
 });

 router.get('/getFarmer', function(req,res){
   let id = req.param('id');
  db.query(("SELECT * from Farmers where farmer_id = '"+ id+"' "), (err, result) => {
     if (err) {
       console.log(err.stack)
     } else {
       res.send(result.rows)
     }
   })
  });

router.get('/getFarmersByFilter', function(req,res){
  let filter = req.param('filter')
  let value = req.param('value')
  db.query(("SELECT * from Farmers where "+ filter+ " = '"+ value+"' "), (err, result) => {
    if (err) {
      console.log(err.stack)
    } else {
      res.send(result.rows)
    }
  })
 });

 router.post('/farmer',(req,res)=>{
  //  db.query(("INSERT INTO Farmers (farmer_id, name, age, address, village, district, state, land ) values (  ))
 })

 module.exports=router;