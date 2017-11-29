var gulp = require('gulp'),
    replace = require('gulp-replace');
//金融街上线脚本oa.fsig.com.cn
gulp.task('release', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //VRCM 192.168.1.224:8080 环境转移 192.168.1.227 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/192\\{2}.168\\{2}.200\\{2}.63/gm, 'http:\\\\/\\\\/oa\\\\.fsig\\\\.com\\\\.cn'))
        .pipe(replace(/192\.168\.200\.63/gm, 'oa.fsig.com.cn'))
        .pipe(replace(/192\.168\.200\.63/gm, 'oa.fsig.com.cn'))
        .pipe(gulp.dest('./'));
});
gulp.task('dev', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //VRCM 192.168.1.224:8080 环境转移 192.168.1.227 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/oa\\{2}.fsig\\{2}.com\\{2}.cn/gm, 'http:\\\\/\\\\/192\\\\.168\\\\.200\\\\.63'))
        .pipe(replace(/oa\.fsig\.com\.cn/gm, '192.168.200.63'))
        .pipe(replace(/oa\.fsig\.com\.cn/gm, '192.168.200.63'))
        .pipe(gulp.dest('./'));
});