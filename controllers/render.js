'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');
var express             = require('express');
var auth                = require('../controllers/auth');

// End of dependencies.


/**
 * Обертка над res.render().
 */
module.exports = function (template, variables) {
  return function (req, res) {
    variables = variables ? variables : {};
    variables.user = auth.getUser(req);
    if (variables.private && !variables.user) {
        res.redirect('/login');
    }
    res.render(template, variables);
  };
};