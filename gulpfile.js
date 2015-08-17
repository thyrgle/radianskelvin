var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');

gulp.task('browserify', function() {
    var bundler = browserify({
        entries: ['./app/main.js'],
        transform: [reactify],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    });
    var watcher = watchify(bundler);

    return watcher
           .on('update', function() {
               var updateStart = Date.now();
               console.log('Updating!');
               watcher.bundle()
                      .pipe(source('main.js'))
                      .pipe(gulp.dest('./build/'));
               console.log('Updated!', (Date.now() - updateStart) + 'ms');
           })
             .bundle()
             .pipe(source('main.js'))
             .pipe(gulp.dest('./build/'));
});

gulp.task('css', function() {
    gulp.watch('styles/**/*.css', function() {
         return gulp.src('styles/**/*.css')
                    .pipe(concat('main.css'))
                    .pipe(gulp.dest('./build/'));
    });
});

gulp.task('default', ['browserify', 'css']);
