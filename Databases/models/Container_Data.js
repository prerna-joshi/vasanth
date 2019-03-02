// schema for the Container_Data Schema that will be updated daily with data sent by sensors

const mongoose = require('mongoose');

const Container_DataSchema = new mongoose.Schema({
   container_id : String,
   item_id: String,
   quantity : Number, 
   date : Date
    
})

const Container_Data = mongoose.model("Container_Data",Container_DataSchema)

module.exports = Container_Data