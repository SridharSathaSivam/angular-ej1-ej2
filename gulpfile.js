'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src(['./**/*.scss', '!./node_modules/**/*.scss'])
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: ['./node_modules/@syncfusion/']
        }).on('error', sass.logError))
        .pipe(gulp.dest('./'));
});