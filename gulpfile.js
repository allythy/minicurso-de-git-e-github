var gulp = require( 'gulp' );
var minifycss = require( 'gulp-minify-css' );
var uglify = require('gulp-uglify');
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

gulp.task('js', function() {
  return gulp.src( './assets/js/*.js')
      .pipe(concat('app.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./assets/js'));
});

gulp.task( 'watch', function() {
  gulp.watch( './assets/css/*.css', [ 'css' ] );
  gulp.watch( './assets/js/*.js', [ 'js' ] );
});

gulp.task('default', ['watch' , 'css', 'copy:pasta', 'js']);
