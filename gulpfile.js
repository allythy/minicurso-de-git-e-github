var gulp = require( 'gulp' );
var minifycss = require( 'gulp-minify-css' );
var concat = require( 'gulp-concat' );
var rename = require( 'gulp-rename' );

gulp.task('copy:pasta',function() {
   gulp.src('node_modules/materialize-css/dist/**/*')
     .pipe(gulp.dest('vendor'));
});

gulp.task( 'css', function() {
  gulp.src( './assets/css/*.css' )
    .pipe(concat('concat.js'))
    .pipe(rename('main.min.css'))
    .pipe( minifycss() )
    .pipe( gulp.dest( './assets/css/' ) );
});

gulp.task( 'watch', function() {
  gulp.watch( './assets/css/*.css', [ 'css' ] );
});

gulp.task('default', ['watch' , 'css', 'copy:pasta']);
