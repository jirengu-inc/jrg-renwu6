var gulp = require('gulp');

var minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    minhtml = require('gulp-htmlmin'),
    jshint = require('gulp-jshint'),
    amdOptimize = require('amd-optimize'),
    imagemin = require('gulp-imagemin');

gulp.task('html', function() {
  return gulp.src('*.html')
             .pipe(minhtml({collapseWhitespace: true}))
             .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  gulp.src('src/css/*.css')
      .pipe(concat('merge.css'))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(minifycss())
      .pipe(gulp.dest('dist/css/'));
});

gulp.task('js', function(argument) {
  gulp.src('src/js/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

gulp.task('rjs', function() {
  gulp.src('src/js/**/*.js')
      .pipe(amdOptimize('main', {
        paths: {
          'jquery': 'src/js/lib/jquery.min',
          'gotop': 'src/js/com/gotop',
          'carousel': 'src/js/com/carousel',
          'exposure': 'src/js/com/exposure',
          'addmore': 'src/js/com/addmore'
        }
      }))
      .pipe(concat('merge.js'))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js/'));
})

gulp.task('img', function() {
  gulp.src('img/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/imgs'));
});

gulp.task('clear', function() {
  gulp.src('dist/*', {read: false})
      .pipe(clean());
});

gulp.task('build', ['html', 'css', 'js', 'rjs', 'img']);