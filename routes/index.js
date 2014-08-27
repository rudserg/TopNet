'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

var requireTree         = require('require-tree');
var controllers         = requireTree('../controllers');
var express             = require('express');

// End of dependencies.


module.exports = function () {

  // Get user credentials if exists, and provide some data to views.

  // Render index page
  this.get('/', controllers.render('index'));

  // Render login page
  this.get('/login', controllers.render('login'));

  // check login
  this.post('/login', controllers.auth.check);

  // logout
  this.get('/logout', controllers.auth.logout('/'));

  // profile
  this.get('/profile', controllers.render('profile', {private:true}));




  // Return compiled stylus-file.
  this.get('/stylesheets/main.css', controllers.stylus('stylus/main.styl', ['nib']));

};