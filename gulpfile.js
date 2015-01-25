var NwBuilder = require('node-webkit-builder'),
    gulp = require('gulp'),
    gutil = require('gulp-util');

gulp.task('nw', function () {

  var nw = new NwBuilder({
   // version: '0.11.5',  // all platforms
    //version: '0.8.6',     // win32, no win64
    version: '0.10.5',
    files: './app/**',
    macIcns: './icons/icon.icns',
    macPlist: {mac_bundle_id: 'myPkg'},
    //platforms: ['win32', 'win64', 'osx32', 'osx64'],
    platforms: ['win32']
    //platforms: ['win64']
  });

  // Log stuff you want
  nw.on('log', function (msg) {
    gutil.log('node-webkit-builder', msg);
  });

  // Build returns a promise, return it so the task isn't called in parallel
  return nw.build().catch(function (err) {
    gutil.log('node-webkit-builder', err);
  });
});


gulp.task('default', ['nw']); // build
