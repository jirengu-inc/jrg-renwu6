var gulp = require('gulp');
//引入组件
var htmlmin = require('gulp-htmlmin'),//html压缩
	cssnano = require('gulp-cssnano'),//css压缩
	imagemin = require('gulp-imagemin'),//图片压缩	
	uglify = require('gulp-uglify'),//js压缩
	jshint = require('gulp-jshint'),//js代码规范检查
	concat = require('gulp-concat'),//合并文件
	rename = require('gulp-rename'),//重命名
	clean = require('gulp-clean'),
	autoprefixer = require('gulp-autoprefixer'),
	rev = require('gulp-rev'),
	useref = require('gulp-useref'),
	revReplace = require('gulp-rev-replace');

gulp.task('dist:css',function(){
	gulp.src('./dist/css/*').pipe(clean());
	return gulp.src('./src/css/*.css')
	           .pipe(concat('merge.min.css'))
	           .pipe(cssnano())
	           .pipe(autoprefixer({
	           	    browsers: ['last 2 versions'],
	           	    cascade: false
	           }))
	           .pipe(gulp.dest('./dist/css'));
});
gulp.task('dist:js',function(){
	gulp.src('./dist/js/*').pipe(clean());
	return gulp.src('./src/js/*.js')
	           .pipe(jshint())
	           .pipe(jshint.reporter('default'))
	           .pipe(uglify())
	           .pipe(rename('merge.min.js'))
	           .pipe(gulp.dest('./dist/js'));
});
gulp.task('rev',['dist:css','dist:js'],function(){
	return gulp.src(['./dist/**/*.css','./dist/**/*.js'])
	           .pipe(rev())
	           .pipe(gulp.dest('./dist'))
	           .pipe(rev.manifest())
	           .pipe(gulp.dest('./dist'));
});
gulp.task('index',['rev'],function(){
	var manifest = gulp.src('./dist/rev-manifest.json');
	return gulp.src('./src/index.html')
	           .pipe(revReplace({
	           		manifest: manifest
	           }))
	           .pipe(useref())
	           .pipe(gulp.dest('./dist'));
});
gulp.task('dist:img',function(){
	return gulp.src('./src/imgs/*')
	 		   .pipe(imagemin())
	 		   .pipe(gulp.dest('./dist/imgs'));
});
gulp.task('build',['dist:css','dist:js','rev','index','dist:img']);