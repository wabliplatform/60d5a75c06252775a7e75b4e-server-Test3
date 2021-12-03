
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const formSchema = new Schema({
Underscoreid:String , 

attr:String 


})

module.exports = {
  Form : mongoose.model('Form', formSchema),
}

