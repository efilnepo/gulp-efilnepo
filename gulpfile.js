var gulp = require('gulp');
var less = require('gulp-less');
var coffee = require('gulp-coffee');
var jade = require('gulp-jade');
var connect = require('gulp-connect');
var clean = require('gulp-clean');

var paths = {
  scripts: ['app/coffee/*.coffee'],
  images: 'app/img/**',
  fonts: ['app/bower_components/bootstrap/dist/fonts/**',
          'app/bower_components/fontawesome/fonts/**',
          'app/bower_components/efilnepo-less/fonts/**'],
  jade: 'app/jade/*.jade',
  less: 'app/less/style.less'
};

gulp.task('less', function() {
  gulp.src(paths.less)
      .pipe(less({ compress: false }))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('clean', function() {
    gulp.src('dist/**', {read: false})
        .pipe(clean());
});

gulp.task('copy', function() {
  gulp.src(paths.images)
      .pipe(gulp.dest('dist/img'));
  gulp.src(paths.fonts)
      .pipe(gulp.dest('dist/fonts/'));
  gulp.src('app/bower_components/jquery/dist/**')
      .pipe(gulp.dest('dist/bower_components/jquery/dist/'));
  gulp.src('app/bower_components/bootstrap/js/**')
      .pipe(gulp.dest('dist/bower_components/bootstrap/js/'));
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

gulp.task('default', ['clean','less','copy','coffee','jade','connect','watch']);

gulp.task('build',['clean','less','copy','coffee','jade']);