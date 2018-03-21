
const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
  id:{type:String, unique:true},
  title:{type:String,},
  orderCount:{type:Number},
  positiveRate:{type:String},
  imgUrl:{type:String,}
})

module.exports = mongoose.model('service', serviceSchema)
