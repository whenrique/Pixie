var gulp = require('gulp'),
	bs   = require('browser-sync'),
	sass = require('gulp-ruby-sass'),
	reload = bs.reload,
	fontgen = require('gulp-fontgen');

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

gulp.task('fontgen', function() {
    return gulp.src('dist/fonts/Aller_Rg.ttf')
    	   .pipe(fontgen({
    	   		dest: "./dist/fonts/style/"
    	   }));
});

gulp.task('default', ['sass', 'bs'], function() {
	gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('*.html', ['bs-reload']);
});