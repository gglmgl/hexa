var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(done) {
    gulp.src("sass/*.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("gglmgl.github.io/css"));
    done();
});

gulp.task('serve', function(done) {
    gulp.watch("sass/*.scss", gulp.series('sass'));
    done();
});

gulp.task('default', gulp.series('sass', 'serve'));