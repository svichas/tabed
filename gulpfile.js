const gulp   = require('gulp');
const uglify = require('gulp-uglify');
const pump   = require('pump');
const rename = require("gulp-rename");
const sass   = require("gulp-sass");

gulp.task('compress-js', function (cb) {
  pump([
        gulp.src('src/*.js'),
        uglify(),
        rename("tabed.min.js"),
        gulp.dest('dist'),
    ],
    cb
  );
});
gulp.task('compress-sass', function (cb) {
  pump([
        gulp.src('src/*.scss'),
        sass({outputStyle: "compressed"}).on("error", sass.logError),
        rename("tabed.min.css"),
        gulp.dest('dist'),
    ],
    cb
  );
});


gulp.task('compress', function (cb) {
  gulp.watch("src/*", ["compress-sass", "compress-js"]);
});
