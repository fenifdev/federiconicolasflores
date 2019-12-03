let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let concat = require('gulp-concat');

exports.default = gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
  	.pipe(concat('style.css'))
    .pipe(cleanCSS({compatibility: 'ie10+'}))
    .pipe(gulp.dest('css'));
});