'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');
var express             = require('express');


// End of dependencies.

exports.getUser = function(req){
  return req.session && req.session.user? req.session.user: null;
};

exports.check =  function(req, res, next) {
    var login = req.body.login, pass = req.body.pass;
    var sql = 'SELECT * FROM user WHERE email= ? and pass = ?';
    connection.query(sql, [login, pass], function(err,results){
        if (err) throw err;
        if(results.length > 0){
            var user = results[0];
            req.session.authorized = true;
            req.session.user = user;
            res.redirect('/');
            return;
        }
        res.render('login', {msg:'Неправильный логин или пароль'});

        return;
    });
};


exports.logout = function () {
  return function (req, res, next) {
      req.session.authorized = false;
      req.session.user = null;
      res.redirect('/');
  };
};


function getUser(id, next){
   user.getUser(id, function(err, result){
       next(user);
   });
}

function getUserPosts(user, next) {
    user.getUserPosts(id, function(err, result){
        next(user);
    });
}

function viewUserPosts(posts, next){
    user.viewUserPosts(id, function(err, result){
        next(user);
    });
}

