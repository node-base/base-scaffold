/*!
 * base-scaffold (https://github.com/node-base/base-scaffold)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var async = require('async');
var debug = require('debug')('base-scaffold');
var each = require('base-files-each');
var ms = require('merge-stream');

module.exports = function(config) {
  return function(app) {
    if (!this.isApp || this.isRegistered('base-scaffold')) return;
    debug('initializing "%s", from "%s"', __filename, module.parent.id);
    this.use(each());

    /**
     * Generate files from a declarative [scaffold][] configuration and return a stream.
     *
     * ```js
     * var Scaffold = require('scaffold');
     * var scaffold = new Scaffold({
     *   options: {cwd: 'source'},
     *   posts: {
     *     src: ['content/*.md']
     *   },
     *   pages: {
     *     src: ['templates/*.hbs']
     *   }
     * });
     *
     * app.scaffold(scaffold, function(err) {
     *   if (err) console.log(err);
     * });
     * ```
     * @name .scaffold
     * @param {Object} `scaffold` Scaffold configuration object.
     * @param {Function} `cb` Optional callback function. If not passed, `.scaffoldStream` will be called and a stream will be returned.
     * @api public
     */

    this.define('scaffold', function(scaffold, options, cb) {
      if (typeof options === 'function') {
        cb = options;
        options = {};
      }

      if (typeof cb !== 'function') {
        return this.scaffoldStream(scaffold, options);
      }

      async.eachOf(scaffold, function(target, name, next) {
        if (!target.files) {
          next();
          return;
        }
        this.each(target, options, next);
      }.bind(this), cb);
    });

    /**
     * Generate files from a declarative [scaffold][] configuration.
     *
     * ```js
     * var Scaffold = require('scaffold');
     * var scaffold = new Scaffold({
     *   options: {cwd: 'source'},
     *   posts: {
     *     src: ['content/*.md']
     *   },
     *   pages: {
     *     src: ['templates/*.hbs']
     *   }
     * });
     *
     * app.scaffoldStream(scaffold)
     *   .on('error', console.error)
     *   .on('end', function() {
     *     console.log('done!');
     *   });
     * ```
     * @name .scaffoldStream
     * @param {Object} `scaffold` [scaffold][] configuration object.
     * @return {Stream} returns a stream with all processed files.
     * @api public
     */

    this.define('scaffoldStream', function(scaffold, options) {
      var streams = [];
      for (var name in scaffold) {
        var target = scaffold[name];
        if (target.files) {
          streams.push(this.eachStream(target, options));
        }
      }
      var stream = ms.apply(ms, streams);
      stream.on('finish', stream.emit.bind(stream, 'end'));
      return stream;
    });

  };
};