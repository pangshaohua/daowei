"use strict";

var express = require('express');
var router = express.Router();

var ShopModel = require("../models/Shop");
var ServiceModel = require("../models/Service");
var ItemModel = require('../models/Item');
var CommentModel = require('../models/Comment');
var DetailModel = require('../models/Detail');

router.get('/getShopList', function (req, res) {
  ShopModel.find({}, function (err, list) {
    if (!err) {
      console.log({ list: list });
      res.send({ list: list });
    }
  });
});

router.get('/getServiceList', function (req, res) {
  ServiceModel.find({}, function (err, list) {
    if (!err) {
      res.send({ list: list });
    }
  });
});

router.get('/getServiceItem', function (req, res) {
  var id = req.query.id;
  ItemModel.findOne({ id: id }, function (err, item) {
    if (!err) {
      res.send({ item: item });
    }
  });
});

router.get('/getComments', function (req, res) {
  //分页公式：find().limit(每页显示条数).skip((页数-1)*每页显示条数)
  var page = req.query.page;
  //exec - execute执行函数
  CommentModel.find({}).limit(10).skip((page - 1) * 10).exec(function (err, comments) {
    if (!err) {
      res.send({ comments: comments });
    }
  });
});

router.get('/getDetail', function (req, res) {
  DetailModel.find({}, function (err, data) {
    if (!err) {
      res.send({ detail: data });
    }
  });
});

module.exports = router;
//# sourceMappingURL=index.js.map