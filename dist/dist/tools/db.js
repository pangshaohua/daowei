'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/daoway');

mongoose.connection.on('open', function () {
  console.log('数据库连接成功');
});
//# sourceMappingURL=db.js.map
//# sourceMappingURL=db.js.map