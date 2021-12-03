
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const formSchema = new Schema({
Underscoreid:String 


})

module.exports = {
  Form : mongoose.model('Form', formSchema),
}

