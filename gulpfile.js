var gulp = require('gulp');
var webserver = require('gulp-webserver');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('compile', function() {
  browserify({
    entries: './es5/app.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./es6'));
});

gulp.task('default', function () {
  gulp.watch('es5/*.js', ['compile']);
  gulp.src('./')
      .pipe(webserver({
        livereload: true,
        open: true
      }));
});
