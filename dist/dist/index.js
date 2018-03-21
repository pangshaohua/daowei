'use strict';

require('./tools/db');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.use(require('./routes'));

app.listen(3000);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map