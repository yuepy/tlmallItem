 //process.env.DISABLE_NOTIFIER = true;
 'use strict';
 var gulp = require('gulp'),
     babel = require('gulp-babel'),
     less = require('gulp-less'),
     autoprefixer = require('gulp-autoprefixer'),
     notify = require('gulp-notify'),
     browserSync = require('browser-sync'),
     // browserify
     browserify = require('browserify'),
     sourcemaps = require('gulp-sourcemaps'),
     source = require('vinyl-source-stream'),
     buffer = require('vinyl-buffer'),
     babelify = require('babelify'),
     clean = require('gulp-clean'),
     webpack = require('webpack-stream');
 //clean
 var env = 'dev';
 var reload = browserSync.reload;

 gulp.task('less', function() {
     gulp.src(
             [
                 'res/less/*.less'
             ]
         ) //res/less目录下创建less后缀文件时
         .pipe(less()) //编译less
         .pipe(autoprefixer('last 2 version', 'safari 5', 'ie6', 'ie7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')) //添加浏览器前缀到css规则 ，自动生成"兼容"前缀
         .pipe(gulp.dest('res/css/')) //输出到res目录下的css目录中生成css后缀文件
         .pipe(browserSync.reload({ stream: true }))
         .pipe(notify({ message: 'less task complete' }));
 })

 gulp.task('babel', function() {
     gulp.src('res/es6/**/*.js')
         .pipe(babel({
             psrcets: ['es2015']
         }))
         .pipe(gulp.dest('res/js'))
         .pipe(notify({ message: 'babel task complete' }));
 })

 gulp.task('js-watch', ['babel'], browserSync.reload);

 // The static server
 gulp.task('serve', ['less'], function() {
     browserSync.init({
         server: {
             baseDir: "./res/"
                 //index:"login.html"
         }
     });

     /* 自动刷新页面 */
     gulp.watch("*.html").on('change', browserSync.reload); //修改heml文件后刷新页面
     gulp.watch('res/less/**/*.less', ['less']); //编译完less后，以无刷新方式更新页面
     //gulp.watch("res/**/*.js", ['js-watch']); //修改js后，刷新页面   
     gulp.watch("*.html").on('change', browserSync.reload);
     gulp.watch('res/less/**/*.less', ['less']);
 });

 gulp.task('noserver', ['less'], function() {
     /* 自动刷新页面 */
     gulp.watch('res/less/**/*.less', ['less']); //编译完less后，以无刷新方式更新页面
     gulp.watch("res/**/*.js", ['js-watch']); //修改js后，刷新页面
     gulp.watch('res/less/**/*.less', ['less']);
     gulp.watch("res/es6/**/*.js", ['js-watch']);
 });

 // // set browserify task
 // gulp.task('browserify',function(){
 //     browserify({
 //         entries: ['res/es6/customerInfo.js'],
 //         debug: true,
 //     })
 //         .transform("babelify", {psrcets: ["es2015"]})
 //         .bundle()
 //         .pipe(source('customerinfo.js'))
 //         .pipe(buffer())
 //         .pipe(sourcemaps.init({loadMaps: true}))
 //         .pipe(sourcemaps.write('.'))
 //         .pipe(gulp.dest('dist/js'))
 //         .pipe(notify({ message: 'browserify task complete' }));
 // })

 //gulp.task('default', ['less','babel','serve','browserify']);
 gulp.task('default', ['less', 'serve']);
 //开启开发状态
 gulp.task('dev', ['default'], function() {
     gulp.watch("res/**/*.js", ['dev:webpack']);
 });
 //开启开发状态
 gulp.task('release', ['clean', 'default'], function() {
     gulp.watch("res/**/*.js", ['release:webpack']);
 });
 //专门给tomcat起一个命令行
 gulp.task('start', ['less']);

 gulp.task('watch', function() {
     gulp.watch('res/less/**/*.less', ['less']);
     gulp.watch('res/js/**/*.js', ['babel']);
 })

 // out srcource
 // gulp.task('watch', function(){
 //   gulp.watch('res/less/**/*.less',['less']);
 //   gulp.watch('res/js/**/*.js', ['babel']);
 //   gulp.watch('res/js/**/*.js', ['browserify']);
 // })

 // clean task
 gulp.task('clean', function() {
     return gulp.src(['./res/js/*.js', './res/js/*.map'], { read: false })
         .pipe(clean());
 });

 gulp.task('dev:webpack', function() {
     return gulp.src('**/indexRoot.js')
         .pipe(webpack(require('./webpack.config.js')('dev')))
         .pipe(gulp.dest('./res/js'));
 });

 gulp.task('release:webpack', function() {
     return gulp.src('**/indexRoot.js')
         .pipe(webpack(require('./webpack.config.js')('release')))
         .pipe(gulp.dest('./res/js'));
 });