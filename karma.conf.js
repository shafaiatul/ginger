/* jshint node:true */

'use strict';

var fs = require('fs'),
    path = require('path'),
    wiredep = require('wiredep'),
    config = JSON.parse(fs.readFileSync('.gingerrc'));

function getFiles() {
  var wiredepOptions = {
    dependencies: true,
    devDependencies: true,
    directory: JSON.parse(fs.readFileSync('.bowerrc')).directory
  };

  // bower js files and application js file
  return wiredep(wiredepOptions).js
    .concat([
      path.join(config.paths.src, 'app/**/*.js')
    ]);
}

module.exports = function(config) {

  config.set({

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: getFiles(),


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
