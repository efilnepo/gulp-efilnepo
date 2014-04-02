var gulp = require('gulp');
var less = require('gulp-less');
var coffee = require('gulp-coffee');
var jade = require('gulp-jade');
var connect = require('gulp-connect');

var paths = {
  scripts: ['app/coffee/*.coffee'],
  images: 'app/img/**',
  jade: 'app/jade/*.jade',
  less: 'app/less/*.less'
};

gulp.task('less', function() {
  gulp.src(paths.less)
      .pipe(less({ compress: false }))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('copy', function() {
  gulp.src(paths.images)
      .pipe(gulp.dest('dist/img'));
});

gulp.task('coffee', function() {
  gulp.src(paths.scripts)
      .pipe(coffee({ bare: true }))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('jade', function() {
  gulp.src(paths.jade)
  	  .pipe(jade({ pretty: true }))
      .pipe(gulp.dest('dist'));
});

gulp.task('connect', connect.server({
  root: ['dist'],
  livereload: true,
  open: {
    file: 'index.html',
    browser: 'chrome'
  }
}));

gulp.task('html-reload', function () {
  gulp.src('dist/index.html')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('app/coffee/*.coffee', ['coffee','html-reload']);
    gulp.watch('app/less/*.less', ['less','html-reload']);
    gulp.watch('app/jade/*.jade',['jade','html-reload']);
});

gulp.task('default', ['less','copy','coffee','jade','connect','watch']);