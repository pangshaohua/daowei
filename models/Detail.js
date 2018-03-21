

const mongoose = require('mongoose')

const detailSchema = new mongoose.Schema({
  imgUrl:{type:String},
  name:{type:String},
  price:{type:Number},
  oldPrice:{type:Number},
  soldCount:{type:Number},
  iconUrl:{type:String},
  orderCount:{type:Number},
  accept:{type:String},
  praise:{type:String},
  title:{type:String}
})

module.exports = mongoose.model("detail", detailSchema)