var gulp = require('gulp'),
	bs   = require('browser-sync'),
	sass = require('gulp-ruby-sass'),
	reload = bs.reload,
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify');

gulp.task('bs', function() {
	bs({
		server: {
			baseDir: './'
		}
	})	
});

gulp.task('bs-reload', function () {
    bs.reload();
});

gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
      .pipe(sass({ style: 'compressed' }))
      .on('error', function (err) { console.log(err.message); })
      .pipe(gulp.dest('./dist/css/'))
      .pipe(reload({ stream: true }));
});

gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      // .pipe(uglify())
      .pipe(gulp.dest('./dist/js/'))
      .pipe(reload({ stream: true }));
});

gulp.task('default', ['sass', 'bs', 'js'], function() {
	gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('*.html', ['bs-reload']);
});