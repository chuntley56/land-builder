"use strict";

var   gulp     = require('gulp'),
      concat   = require('gulp-concat'),
      uglify   = require('gulp-uglify'),
      minify = require('gulp-minify'),
      rename   = require('gulp-rename'),
      babel = require('gulp-babel'),
      sass     = require('gulp-sass'),
      csso     = require('gulp-csso'),
      imagemin = require('gulp-imagemin'),
      pngquant = require('imagemin-pngquant'),
      sourcemaps = require('gulp-sourcemaps'),
      autoprefixer = require('gulp-autoprefixer');


gulp.task('compressimg', function(){
  return gulp.src('img/*')
    .pipe(imagemin({
          progressive : true,
          svgoPlugins : [{removeViewBox: false}],
          use         : [pngquant()]
      }))
    .pipe(gulp.dest('img'));
});

gulp.task('scripts', function() {
  gulp.src('./js/src/*.js')
    .pipe(babel({
            presets: ['env']
        }))
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.min.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('./js/dist'))
});

gulp.task('sassify', function () {
   return gulp.src('scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false
      }))
    .pipe(csso())
    .pipe(rename('main.min.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'));
});


gulp.task('js:watch', function() {
    gulp.watch('./js/main.js', ['scripts'])
});

gulp.task('sassify:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sassify']);
});


gulp.task("default", ['compressimg', 'scripts', 'sassify', 'js:watch', 'sassify:watch']);
