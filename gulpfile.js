const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function(callback) {
    console.log('Construyendo el sitio');
    setTimeout(function() {
        callback();
    }, 1200);  
});

//la tarea nos inicia un server
gulp.task('serve', function(callback) {
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true
        }));
})

//configuramos tareas en series. y en el script del package.json creamos el script start para llar estas tareas en serie
gulp.task('default', gulp.series('build', 'serve'))