var gulp = require('gulp'),
    less = require('gulp-less')
    cssmin = require('gulp-minify-css');
 
gulp.task('toCss', function () {
    console.log('less is transfered')
    gulp.src(['./src/less/bootstrap.less']) //多个文件以数组形式传入
        .pipe(less())
        .pipe(gulp.dest('./dist/css')); //将会在src/css下生成index.css以及detail.css 
});

gulp.task('toMinCss', function () {
    console.log('less is transfered')
    gulp.src(['./src/less/bootstrap.min.less']) //多个文件以数组形式传入
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css')); //将会在src/css下生成index.css以及detail.css 
});