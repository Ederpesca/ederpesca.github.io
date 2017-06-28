var cp          = require('child_process')
var browserSync = require('browser-sync')
var gulp        = require('gulp')
var gutil       = require('gulp-util')
var shell       = require('gulp-shell')

var siteRoot = '_site'

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span>$ jekyll build'
}

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild)
  return cp.spawn('jekyll', ['build', '--config', '_config.yml,_config_dev.yml'], {stdio: 'inherit'}).on('close', done)
})

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload()
})

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build'], function () {
  browserSync({
    server: {
      baseDir: '_site'
    }
  })
})

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(['*.html',
    'eu/*.html',
    'en/*.html',
    'fr/*.html',
    'it/*.html',
    '_layouts/*.html',
    '_includes/*.html',
    '_posts/*',
    '_recetas/**/*',
    '_nutricion/**/*',
    '_procesos/**/*',
    '_productos/**/*',
    '_lineas/**/*',
    '_slider/**/*',
    '_config.yml',
    '_images/*',
    '_sass/*.scss',
    'css/*.scss'],
    ['jekyll-rebuild'])
})

/**
 *  Build the Jekyll Site for production
 */
gulp.task('jekyll-build-prod', function (done) {
  browserSync.notify(messages.jekyllBuild)
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'}).on('close', done)
})

/**
 * Deploy
 */
gulp.task('deploy', ['jekyll-build-prod'], shell.task([
  'git add --all && git commit -m "update blog" && git push'

]))

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch'])
