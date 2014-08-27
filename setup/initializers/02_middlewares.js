'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');
var auth                = require('../../controllers/auth');

// End of dependencies.

// Setup variables for jade
module.exports = function (done) {


  this.use(function (req, res, next) {
    res.locals.user = req.session && req.session.user?req.session.user:null;
    next();
  });


  done();

};