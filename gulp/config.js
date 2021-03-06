module.exports = function(){
  'use strict';

  var CDN_URL = '';

  var SRC_FOLDER = 'src/';
  var MODULES_FOLDER = SRC_FOLDER + 'modules/';
  var FILES_FOLDER = SRC_FOLDER + 'files/';
  var IMAGES_FOLDER = FILES_FOLDER + 'img/';
  var LESS_FOLDER = FILES_FOLDER + 'less/';
  var BOWER_FOLDER = FILES_FOLDER + 'bower_components/';

  var TEMP_FOLDER = SRC_FOLDER + '.tmp/';
  var TEMP_CSS_FOLDER = TEMP_FOLDER + 'css/';
  
  var TEST_FOLDER = SRC_FOLDER + 'test/';
  var TEST_MODULES_FOLDER = TEST_FOLDER + 'modules/';

  var DIST_FOLDER = 'dist/';
  var IMAGES_DIST_FOLDER = DIST_FOLDER + 'img/';
  var FONTS_DIST_FOLDER = DIST_FOLDER + 'fonts/';
  
  var ENVIRONMENTS_FOLDER = SRC_FOLDER + 'environment/';

  return {
    SRC_FOLDER: SRC_FOLDER,
    MODULES_FOLDER: MODULES_FOLDER,
    FILES_FOLDER: FILES_FOLDER,
    IMAGES_FOLDER: IMAGES_FOLDER,
    LESS_FOLDER: LESS_FOLDER,
    BOWER_FOLDER: BOWER_FOLDER,
    TEMP_FOLDER: TEMP_FOLDER,
    TEMP_CSS_FOLDER: TEMP_CSS_FOLDER,
    TEST_FOLDER: TEST_FOLDER,
    TEST_MODULES_FOLDER: TEST_MODULES_FOLDER,
    DIST_FOLDER: DIST_FOLDER,
    IMAGES_DIST_FOLDER: IMAGES_DIST_FOLDER,
    FONTS_DIST_FOLDER: FONTS_DIST_FOLDER,
    CDN_URL: CDN_URL,
    ENVIRONMENTS_FOLDER: ENVIRONMENTS_FOLDER
  };
}; 
