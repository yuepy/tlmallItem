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
        .pipe(replace(/http:\\{2}\/\\{2}\/172\\{2}.16\\{2}.11\\{2}.61:8000/gm, 'http:\\\\/\\\\/bpm\\\\.cofcoko\\\\.com'))
        .pipe(replace(/http:\\{2}\/\\{2}\/172\\{2}.16\\{2}.11\\{2}.61:9995/gm, 'http:\\\\/\\\\/bpm\\\\.cofcoko\\\\.com:9997'))
        .pipe(replace(/http:\\{2}\/\\{2}\/172\\{2}.16\\{2}.11\\{2}.61:9992/gm, 'http:\\\\/\\\\/bpm\\\\.cofcoko\\\\.com:8080'))
        .pipe(replace(/http:\\{2}\/\\{2}\/172\\{2}.16\\{2}.11\\{2}.61:9993/gm, 'http:\\\\/\\\\/bpm\\\\.cofcoko\\\\.com:9001'))
        .pipe(replace(/http:\\{2}\/\\{2}\/172\\{2}.16\\{2}.11\\{2}.61:9099/gm, 'http:\\\\/\\\\/bpm\\\\.cofcoko\\\\.com:9099'))
        .pipe(replace(/http:\\{2}\/\\{2}\/172\\{2}.16\\{2}.11\\{2}.61:81/gm, 'http:\\\\/\\\\/payroll\\\\.cofcoko\\\\.com:81'))
        .pipe(replace(/http:\\{2}\/\\{2}\/172\\{2}.16\\{2}.11\\{2}.61/gm, 'https:\\\\/\\\\/info\\\\.cofcoko\\\\.com'))
        .pipe(replace(/http:\\{2}\/\\{2}\/info\\{2}.cofcoko\\{2}.com/gm, 'https:\\\\/\\\\/info\\\\.cofcoko\\\\.com'))
        .pipe(replace(/172\.16\.11\.61:8000/gm, 'bpm.cofcoko.com'))
        .pipe(replace(/172\.16\.11\.61:9995/gm, 'bpm.cofcoko.com:9997'))
        .pipe(replace(/172\.16\.11\.61:9992/gm, 'bpm.cofcoko.com:8080'))
        .pipe(replace(/172\.16\.11\.61:9993/gm, 'bpm.cofcoko.com:9001'))
        .pipe(replace(/172\.16\.11\.61:9099/gm, 'bpm.cofcoko.com:9099'))
        .pipe(replace(/172\.16\.11\.61:81/gm, 'payroll.cofcoko.com:81'))
        .pipe(replace(/http:\/\/172\.16\.11\.61/gm, 'https://info.cofcoko.com'))
        .pipe(replace(/http:\/\/info\.cofcoko\.com/gm, 'https://info.cofcoko.com'))
        .pipe(gulp.dest('./'));
});

gulp.task('devCom', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //可口可乐 http://info.cofcoko.com 环境转移 http://172.16.11.61:8000 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/bpm\\{2}.cofcoko\\{2}.com/gm, 'http:\\\\/\\\\/172\\\\.16\\\\.11\\\\.61:8000'))
        .pipe(replace(/http:\\{2}\/\\{2}\/bpm\\{2}.cofcoko\\{2}.com:9997/gm, 'http:\\\\/\\\\/172\\\\.16\\\\.11\\\\.61:9995'))
        .pipe(replace(/http:\\{2}\/\\{2}\/bpm\\{2}.cofcoko\\{2}.com:8080/gm, 'http:\\\\/\\\\/172\\\\.16\\\\.11\\\\.61:9992'))
        .pipe(replace(/http:\\{2}\/\\{2}\/bpm\\{2}.cofcoko\\{2}.com:9001/gm, 'http:\\\\/\\\\/172\\\\.16\\\\.11\\\\.61:9993'))
        .pipe(replace(/http:\\{2}\/\\{2}\/bpm\\{2}.cofcoko\\{2}.com:9099/gm, 'http:\\\\/\\\\/172\\\\.16\\\\.11\\\\.61:9099'))
        .pipe(replace(/http:\\{2}\/\\{2}\/payroll\\{2}.cofcoko\\{2}.com:81/gm, 'http:\\\\/\\\\/172\\\\.16\\\\.11\\\\.61:81'))
        .pipe(replace(/https:\\{2}\/\\{2}\/info\\{2}.cofcoko\\{2}.com/gm, 'http:\\\\/\\\\/172\\\\.16\\\\.11\\\\.61'))
        .pipe(replace(/https:\\{2}\/\\{2}\/info\\{2}.cofcoko\\{2}.com/gm, 'http:\\\\/\\\\/info\\\\.cofcoko\\\\.com'))
        .pipe(replace(/bpm\.cofcoko\.com:9997/gm, '172.16.11.61:9995'))
        .pipe(replace(/bpm\.cofcoko\.com:8080/gm, '172.16.11.61:9992'))
        .pipe(replace(/bpm\.cofcoko\.com:9001/gm, '172.16.11.61:9993'))
        .pipe(replace(/bpm\.cofcoko\.com:9099/gm, '172.16.11.61:9099'))
        .pipe(replace(/bpm\.cofcoko\.com/gm, '172.16.11.61:8000'))
        .pipe(replace(/payroll\.cofcoko\.com:81/gm, '172.16.11.61:81'))
        .pipe(replace(/https:\/\/info\.cofcoko\.com/gm, 'http://172.16.11.61'))
        .pipe(replace(/https:\/\/info\.cofcoko\.com/gm, 'http://info.cofcoko.com'))
        .pipe(gulp.dest('./'));
});