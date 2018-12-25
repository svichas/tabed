const gulp   = require('gulp');
const uglify = require('gulp-uglify');
const pump   = require('pump');
const rename = require("gulp-rename");
const sass   = require("gulp-sass");
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');



gulp.task('compress-js', function() {

  pump([
        gulp.src('src/*.js'),
        babel({
            presets: ['@babel/env']
        }),
        uglify(),
        rename("tabed.min.js"),
        gulp.dest('dist'),
    ]
  );

  pump([
        gulp.src('src/*.js'),
        babel({
            presets: ['@babel/env']
        }),
        rename("tabed.js"),
        gulp.dest('dist'),
    ]
  );

});

gulp.task('compress-sass', function (cb) {

  pump([
        gulp.src('src/*.scss'),
        sass({outputStyle: "compressed"}).on("error", sass.logError),
        autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }),
        rename("tabed.min.css"),
        gulp.dest('dist'),
    ],
    cb
  );

});


gulp.task('compile', function (cb) {
  gulp.watch("src/*.js", ["compress-js"]);
  gulp.watch("src/*.scss", ["compress-sass"]);
});
