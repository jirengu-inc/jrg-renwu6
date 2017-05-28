var gulp = require('gulp');
//引入组件
var htmlmin = require('gulp-htmlmin'),//html压缩
	cssnano = require('gulp-cssnano'),//css压缩
	imagemin = require('gulp-imagemin'),//图片压缩	
	uglify = require('gulp-uglify'),//js压缩
	jshint = require('gulp-jshint'),//js代码规范检查
	concat = require('gulp-concat'),//合并文件
	rename = require('gulp-rename');

// gulp.task('build:html',function(){
// 	return gulp.src('./src/*.html')
// 			   .pipe(htmlmin({
// 			   		collapseWhitespace: true
// 			   }))
// 			   .pipe(gulp.dest('./dist'));
// });
gulp.task('build:css',function(){
	return gulp.src('./src/css/*.css')
			   .pipe(concat('index.css'))
			   .pipe(cssnano())
			   .pipe(gulp.dest('./dist/css'));
});
gulp.task('build:js',function(){
	return gulp.src('./src/js/*.js')
			   .pipe(jshint())
			   .pipe(jshint.reporter('default'))
			   .pipe(uglify())
			   .pipe(rename('carousel.js'))
			   .pipe(gulp.dest('./dist/js'));
});
gulp.task('build:img',function(){
	return gulp.src('.src/imgs/*')
		       .pipe(imagemin())
		       .pipe(gulp.dest('./dist/imgs'));
});
gulp.task('build',['build:css','build:js','build:img']);