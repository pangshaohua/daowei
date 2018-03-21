'use strict';

var mongoose = require('mongoose');

var shopSchema = new mongoose.Schema({
  serviceIndex: { type: String },
  serviceType: { type: Array },
  shopList: { type: Array }
});

module.exports = mongoose.model('shop', shopSchema);
//# sourceMappingURL=shop.js.map