var gulp = require( 'gulp' );
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('assets/css/sass/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task( 'watch', function() {
   gulp.watch( './assets/css/**/*.sass', [ 'sass' ] );
});

gulp.task('default', ['watch' , 'sass']);
