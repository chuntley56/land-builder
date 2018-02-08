"use strict";

var gulp     = require('gulp'),
    concat   = require('gulp-concat'),
    uglify   = require('gulp-uglify'),
    rename   = require('gulp-rename'),
    sass     = require('gulp-sass'),
    csso     = require('gulp-csso'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint   = require('gulp-jshint'),
    postcss = require('gulp-postcss'),
    csswring = require('csswring'),
    autoprefixer = require('autoprefixer-core'),
    rucksack = require('rucksack-css'),
    sasslint = require('gulp-sass-lint'),
    browserSync = require('browser-sync').create();

var reload = browserSync.reload;

gulp.task('compressimg', function(){
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive : true,
            svgoPlugins : [{removeViewBox: false}],
            use         : [pngquant()]
        }))
        .pipe(gulp.dest('img'));
});

gulp.task('jslint', function() {
    return gulp.src('./js/general.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
})

gulp.task('sasslint', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sasslint())
        .pipe(sasslint.format())
        .pipe(sasslint.failOnError());
})

gulp.task('scripts', function() {
    return gulp.src('./js/general.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./js'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

gulp.task('sassify', function () {
  var processors = [
    csswring,
    autoprefixer,
    rucksack
  ];

 return gulp.src('scss/main.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss(processors))
  .pipe(csso())
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./css'));
});


gulp.task('js:watch', function() {
    gulp.watch('./js/general.js', ['jslint', 'scripts'])
})

gulp.task('sassify:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sasslint', 'sassify']);
});


gulp.task("default", ['compressimg', 'jslint', 'sasslint', 'scripts', 'sassify', 'js:watch', 'sassify:watch']);
