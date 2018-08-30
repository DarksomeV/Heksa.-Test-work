const gulp 	= require('gulp');  //init gulp
const autoprefixer 	= require('gulp-autoprefixer'); //Init gulp-autoprefixer
const sass = require('gulp-sass'); //Init gulp-sass
// const concat 	= require('gulp-concat'); //Init gulp-concat

gulp.task('sass', function () {
    return gulp.src('source/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 version']
        }))
        .pipe(gulp.dest('./app/css'));
});

// gulp.task('concat-css', function () {
//     gulp.src([
//         'app/css/fonts.css',
//         'app/css/reset.css',
//         'app/css/components/*.css'])
//         .pipe(concat('style.css'))
//         .pipe(gulp.dest('app/css'))
// });

gulp.task('watch', ['sass'], function () {
    gulp.watch('source/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);