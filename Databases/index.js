const { Pool } = require('pg')
const {Client} = require('pg');
const DBCredentials = require('../DBCredentials')
const client = new Client(DBCredentials.obj)
// const module = require('module')

 function DBConnect(){
    client.connect()
    .then(() => console.log("connected successfuly"))
 }
 DBConnect()

 function disconnect(){
     client.end()
 }
  
module.exports = {
  query: (text, params) => client.query(text, params)
}