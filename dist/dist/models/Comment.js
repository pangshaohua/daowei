"use strict";

var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  iconUrl: { type: String },
  area: { type: String },
  city: { type: String },
  comment: { type: String },
  createtime: { type: Number },
  nick: { type: String },
  star: { type: Number }
});

module.exports = mongoose.model("comment", commentSchema);
//# sourceMappingURL=Comment.js.map
//# sourceMappingURL=Comment.js.map