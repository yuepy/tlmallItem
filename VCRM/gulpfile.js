var gulp = require('gulp'),
    replace = require('gulp-replace');
//这是为了上线做的脚本http://192.168.220.82:8080/
gulp.task('SDPON', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        .pipe(replace(/http:\\{2}\/\\{2}\/192\\{2}.168\\{2}.220\\{2}.82:8080/gm, 'http:\\\\/\\\\/pttlcrm\\\\.com'))
        .pipe(replace(/192\.168\.220\.82:8080/gm, 'pttlcrm.com'))
        .pipe(replace(/192\.168\.220\.82/gm, 'pttlcrm.com'))
        .pipe(gulp.dest('./'))
});
gulp.task('SDPOFF', function(){
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        .pipe(replace(/http:\\{2}\/\\{2}\/pttlcrm\\{2}.com/gm, 'http:\\\\/\\\\/192\\\\.168\\\\.220\\\\.82:8080'))
        .pipe(replace(/pttlcrm\.com/gm, '192.168.220.82:8080'))
        .pipe(replace(/pttlcrm\.com/gm, '192.168.220.82:8080'))
        .pipe(gulp.dest('./'))
});