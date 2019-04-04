var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require("gulp-uglify");
var pump = require("pump");
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src("scss/styles.scss")
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});
gulp.task('compress', function (cb) {
    pump([
            gulp.src('app/js/*.js'),
            uglify(),
            gulp.dest('app/js/dist')
        ],
        cb
    );
});

gulp.task('serve', gulp.series('sass', function () {

    browserSync.init({
        server: "./app"
    });
    gulp.watch("app/js/*.js", gulp.series('compress'));
    gulp.watch("scss/**/*.scss", gulp.series('sass'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
}));





gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
});