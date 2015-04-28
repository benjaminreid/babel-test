var gulp = require('gulp');
var babel = require('gulp-babel');
var webserver = require('gulp-webserver');

gulp.task('compile', function() {
  return gulp.src('es5/*.js')
    .pipe(babel())
    .pipe(gulp.dest('es6'))
  ;
});

gulp.task('default', function () {
  gulp.watch('es5/*.js', ['compile']);
  gulp.src('./')
      .pipe(webserver({
        livereload: true,
        open: true
      }));
});
