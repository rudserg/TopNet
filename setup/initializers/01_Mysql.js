'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');
var mysql            = require('mysql');

// End of dependencies.


module.exports = function (done) {
  var mysql = require('mysql');
  var config = require('nconf');
  global.connection  = mysql.createConnection({
      host     : config.get('db:host'),
      user     : config.get('db:user'),
      password : config.get('db:password'),
      database : config.get('db:database')
  });
  connection.connect(function(err) {
      if (err) {
          log.error(('Setting up failed to connect to ' + config.get('db:host')), err.message);
          return;
      }
      log.info('Started connection on ' + (config.get('db:host')) + '...');
  });
  done();
};