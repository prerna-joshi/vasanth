//schema for the Thresholds Collection that hold data for 

const mongoose = require('mongoose');

const ThresholdSchema = new mongoose.Schema({
    item_id : { type:String , required: true },
    thresholds : { type:Object , required: true} 
})

const Threshold = mongoose.model("Threshold" , ThresholdSchema);

module.exports = Threshold