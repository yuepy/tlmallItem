var gulp = require('gulp');
replace = require('gulp-replace');
gulp.task('release', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        .pipe(replace(/http:\\{2}\/\\{2}\/192\\{2}.168\\{2}.220\\{2}.110/gm, 'https:\\\\/\\\\/tlihr\\\\.pttl\\\\.com'))
        .pipe(replace(/192\.168\.220\.110/gm, 'tlihr.pttl.com'))
        .pipe(gulp.dest("./"))
});
gulp.task('dev', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        .pipe(replace(/https:\\{2}\/\\{2}\/tlihr\\{2}.pttl\\{2}.com/gm, 'http:\\\\/\\\\/192\\\\.168\\\\.220\\\\.110'))
        .pipe(replace(/tlihr\.pttl\.com/gm, '192.168.220.110'))
        .pipe(gulp.dest("./"))
});