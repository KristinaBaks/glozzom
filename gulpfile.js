var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('default', ['watch', 'style']);

gulp.task('watch', function () {
    browserSync.init({
        notify: false,
        server: {
            baseDir: './'
        }
    });
    gulp.watch('*.html', function () {
        browserSync.reload();
    });
    gulp.watch('sass/*.scss', ['style']);
});

gulp.task('style', function () {
    return gulp.src('sass/style.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer('last 3 versions'))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});