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
	return gulp.src(['js/jquery.min.js', 'js/transition.min.js', 'js/**/*.js'])
        .pipe(uglify())
		.pipe(concat('totem.vendor.min.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('minify-file-upload', function() {
    return gulp.src(['fileupload/jquery.ui.widget.js', 'fileupload/load-image.all.min.js', 'fileupload/canvas-to-blob.min.js', 'fileupload/jquery.fileupload.js', 'fileupload/jquery.fileupload-process.js', 'fileupload/jquery.fileupload-image.js', 'fileupload/jquery.fileupload-validate.js', 'fileupload/oncomplete.js'])
        .pipe(uglify())
        .pipe(concat('totem.fileupload.min.js'))
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['minify-css', 'minify-js', 'minify-file-upload'], function() {

});
