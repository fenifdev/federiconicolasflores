let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');

exports.default = gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});