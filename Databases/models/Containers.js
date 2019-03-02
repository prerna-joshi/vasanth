//schema for the Container Collection

const mongoose = require('mongoose');

const ContainerSchema = new mongoose.Schema({
    collection_id : { type:String , required:true , unique:true},
    item : String,
    capacity : Number,
    incharge_person : String,
    location : Object 
})

const Container = mongoose.model("Container" , ContainerSchema);

module.exports = Container