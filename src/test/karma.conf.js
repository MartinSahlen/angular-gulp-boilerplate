module.exports = function(config) {
  'use strict';

  var conf = require('../../gulp/config')();

  config.set({
    basePath: '../..',
    frameworks: ['jasmine'],
    files: require('wiredep')({
      devDependencies: true,
      exclude: [
        conf.BOWER_FOLDER + 'font-awesome/*',
        conf.BOWER_FOLDER + 'bootstrap/*',
        conf.BOWER_FOLDER + 'bootswatch/*'
      ]
    }).js.concat(
    [
      conf.MODULES_FOLDER + '*.js',
      conf.MODULES_FOLDER + '*/*.js',
      conf.MODULES_FOLDER + '*/*/**/*.js',
      conf.TEST_MODULES_FOLDER + '**/*.spec.js'
    ]),
    exclude: [
    ],
    reporters: ['spec', 'html'],
    specReporter: {maxLogLines: 5},
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      'PhantomJS'/**,
      'Chrome',
      'Safari',
      'Opera',
      'Firefox'**/
    ],
    singleRun: false
  });
};
