var gulp     = require('gulp');
var recess   = require('gulp-recess');
var jsonlint = require("gulp-jsonlint");

gulp.task( 'lint', ['less', 'json']);

// Lint LESS files
gulp.task('less', function () {
     gulp.src('index.less')
        .pipe(recess({"noOverqualifying": false} ))
        .pipe(recess.reporter());
});

// Lint package.json
gulp.task('json', function () {
	gulp.src('package.json')
	    .pipe(jsonlint())
	    .pipe(jsonlint.reporter());
})