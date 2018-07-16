var gulp = require('gulp'),
    replace = require('gulp-replace');
//这是为了上线做的脚本http://192.168.220.82:8080/
gulp.task('release', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //VRCM 192.168.220.82:8080 环境转移 192.168.1.227 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/192\\{2}.168\\{2}.220\\{2}.82:8080/gm, 'http:\\\\/\\\\/192\\\\.168\\\\.1\\\\.227'))
        .pipe(replace(/192\.168\.220\.82:8080/gm, '192.168.1.227'))
        .pipe(replace(/192\.168\.220\.82/gm, '192.168.1.227'))
        .pipe(gulp.dest('./'));
});

gulp.task('dev', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //VCRM 192.168.1.227 环境转移 192.168.1.224:8080 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/192\\{2}.168\\{2}.1\\{2}.227/gm, 'http:\\\\/\\\\/192\\\\.168\\\\.220\\\\.82:8080'))
        .pipe(replace(/192\.168\.1\.227/gm, '192.168.220.82:8080'))
        .pipe(replace(/192\.168\.1\.227/gm, '192.168.220.82'))
        .pipe(gulp.dest('./'));
});

//修改域名 ip 172.16.11.61:8000 改为 域名 http://info.cofcoko.com
gulp.task('releaseCom', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //可口可乐 http://172.16.11.61:8000 环境转移 http://info.cofcoko.com 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/172\\{2}.16\\{2}.11\\{2}.61:8000/gm, 'http:\\\\/\\\\/info\\\\.cofcoko\\\\.com'))
        .pipe(replace(/172\.16\.11\.61:8000/gm, 'info.cofcoko.com'))
        .pipe(replace(/172\.16\.11\.61/gm, 'info.cofcoko.com'))
        .pipe(gulp.dest('./'));
});

gulp.task('devCom', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //可口可乐 http://info.cofcoko.com 环境转移 http://172.16.11.61:8000 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/info\\{2}.cofcoko\\{2}.com/gm, 'http:\\\\/\\\\/172\\\\.16\\\\.11\\\\.61:8000'))
        .pipe(replace(/info\.cofcoko\.com/gm, '172.16.11.61:8000'))
        .pipe(replace(/info\.cofcoko\.com/gm, '172.16.11.61'))
        .pipe(gulp.dest('./'));
});