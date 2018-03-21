
const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  id:{type:String, unique:true},
  title:{type:String},
  name:{type:String},
  desc:{type:String},
  price:{type:Number},
  oldPrice:{type:Number},
  orderCount:{type:Number},
  soldCount:{type:Number},
  commentCount:{type:Number},
  accept:{type:String},
  praise:{type:String},
  imgUrl:{type:String},
  company:{type:String},
  profile:{type:String}
})

module.exports = mongoose.model("item", itemSchema)