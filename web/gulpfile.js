var gulp = require('gulp'),
	bs   = require('browser-sync'),
	sass = require('gulp-ruby-sass'),
	reload = bs.reload;

gulp.task('sass', function() {
    return gulp.src('src/scss/.scss')
      .pipe(sass({
      		sourcemap: true, 
      		trace: true, 
      		style: compressed
      	}))
      .pipe(dist('dist/css/main.css'))
      .pipe(reload({stream: true}));
});

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

gulp.task('default', ['bs'], ['sass'], function() {
	gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('*.html', ['bs-reload']);
});