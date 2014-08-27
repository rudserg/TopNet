'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');
var mysql            = require('mysql');

// End of dependencies.

function Post(){
    this.table = 'post';
}

Post.find = function(conditions, callback){
    var posts = [];
    callback(null, posts);
}

module.exports = Post;