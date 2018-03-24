var express = require('express')
var router = express.Router()

const ShopModel = require("../models/Shop")
const ServiceModel = require("../models/Service")
const ItemModel = require('../models/Item')
const CommentModel = require('../models/Comment')
const DetailModel = require('../models/Detail')

router.get('/getShopList',function (req, res) {
  ShopModel.find({},function (err, list) {
    if(!err){
      console.log({list:list})
      res.send({list:list})
    }
  })
});

router.get('/getServiceList', function (req, res) {
  ServiceModel.find({},function (err, list) {
    if(!err){
      res.send({list:list})
    }
  })
})

router.get('/getServiceItem', function (req, res) {
  const id = req.query.id
  ItemModel.findOne({id:id}, function (err, item) {
    if(!err){
      res.send({item:item})
    }
  })
})

router.get('/getComments', function (req, res) {
  //分页公式：find().limit(每页显示条数).skip((页数-1)*每页显示条数)
  const page = req.query.page
  //exec - execute执行函数
  CommentModel.find({}).limit(10).skip((page-1)*10).exec(function (err, comments) {
    if(!err){
      res.send({comments:comments})
    }
  })
})

router.get('/getDetail', function (req, res) {
  DetailModel.find({}, function (err, data) {
    if(!err){
      res.send({detail:data})
    }
  })
})

module.exports = router
