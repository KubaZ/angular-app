'use strict';

var statik = require('statik');
var server = statik.createServer({ gzip: true });
server.listen();
