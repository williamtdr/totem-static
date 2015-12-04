var gulp = require('gulp'),
	minifyCss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

gulp.task('minify-css', function() {
	return gulp.src('css/**/*.css')
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(concat('totem.vendor.min.css'))
		.pipe(gulp.dest('dist'));
});

gulp.task('minify-js', function() {
	return gulp.src(['js/jquery.min.js','js/jquery.noty.packaged.min.js', 'js/**/*.js'])
		.pipe(uglify())
		.pipe(concat('totem.vendor.min.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['minify-css', 'minify-js'], function() {

});
