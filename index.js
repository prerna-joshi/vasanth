// main file

const express = require('express');
const path = require('path');
const bodyParser=require('body-parser');
const DBCredentials = require('./DBCredentials');


const app = express();
app.use(bodyParser());

//define routes
app.use(require('./routes/farmer'))
// app.use(require('./routes/close'))

// server
app.listen(1337, function(){
  console.log('ready on port 1337');
});

