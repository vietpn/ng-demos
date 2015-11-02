/**
 * Created by vietpn on 02/11/2015.
 */
var gulp = require('gulp');
var plug = require('gulp-load-plugins')();

var source = [
    './src/client/app/**/*module*.js',
    './src/client/app/**/*.js',
]

gulp.task('ngAnnotateTest', function(){
    return gulp
        .src(source)
        .pipe(plug.ngAnnotate({
            add: true,
            single_quotes: true
        }))
        .pipe(plug.rename(function(path){
            path.extname = '.annotated.js';
        }))
        .pipe(gulp.dest('./build'));
})