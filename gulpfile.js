'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));
var sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

var sassFiles = './src/**/*.scss';
var cssOut = 'out';

gulp.task('sass', function() {
    return gulp.src('src/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest(cssOut));
});

gulp.task('sass:watch', function() {
   gulp.watch(sassFiles, {ignoreInitial: false}, gulp.series('sass'));
});
