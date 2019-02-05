// Gulp
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Browser sync 
const browserSync = require('browser-sync').create();

// Browser task


gulp.task('default', () => {
    // code for your default task goes here
    console.log('gulp is here');

    browserSync.init({
        server: './',
        port: 8080
    });
    gulp.watch('sass/**/*.scss', ['styles']);
    //   done();
});

gulp.task('styles', function () {
    console.log('gulp style is here');
    gulp
        .src('sass/**/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(
            autoprefixer({
                browsers: ['last 2 versions']
            })
        )
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());

});