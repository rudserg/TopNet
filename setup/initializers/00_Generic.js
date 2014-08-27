'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

// End of dependencies.
module.exports = function (done) {

  // Setup nconf
  config.file({ file: __dirname+'/../../config.json' });

  // You can do more setups here
  // ...
  done();

};