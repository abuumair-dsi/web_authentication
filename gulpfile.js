/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-cssnano gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */



// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var notify = require('gulp-notify');
var useref = require('gulp-useref');
var sourcemaps = require('gulp-sourcemaps');
var lazypipe = require('lazypipe');
var gulpif = require('gulp-if');
var minifyCss = require('gulp-minify-css');

var ngHtml2Js = require("gulp-ng-html2js");
var minifyHtml = require("gulp-minify-html");

// Lint Task
gulp.task('lint', function() {
    return gulp.src('app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// // Compile Our Sass
// gulp.task('sass', function() {
//     return gulp.src('assets/**/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('dist/css'));
// });

gulp.task('css', function() {
    var path = ['bower_components/angular-bootstrap/ui-bootstrap-csp.css',
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/font-awesome/css/font-awesome.min.css',
        'assets/css/**/*.css'];
    return gulp.src(path)
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css'));
});

// HtmlToJs
gulp.task('htmlToJs', function() {

   return gulp.src("./**/*.m.tpl.html")
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2Js())
        .pipe(concat("views.tpl.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist"));

    // return gulp.src('./**/*.m.tpl.html')
    //     .pipe(htmlToJs({concat: 'views.tpl.js'}))
    //     .pipe(gulp.dest('dist'));
});

// HtmlToJs
gulp.task('allJStoOneJS', function() {
    var path = [
        'dist/views.tpl.js',
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'bower_components/moment/moment.js',
        'bower_components/angular-animate/angular-animate.min.js',
        'bower_components/ngstorage/ngStorage.min.js',
        'app/**/*.module.js',
        'app/**/*.routes.js',
        'app/**/*Controller.js',
        'app/**/*Service.js',
        'app/**/*Directive.js',
        'app/**/*Factory.js'];
    return gulp.src(path)
        .pipe(concat('all.tpl.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.tpl.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


// Concatenate & Minify JS
gulp.task('scripts', function() {
    var path = ['bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'bower_components/moment/moment.js',
        'bower_components/angular-animate/angular-animate.min.js',
        'bower_components/ngstorage/ngStorage.min.js',
        'app/**/*.module.js',
        'app/**/*.routes.js',
        'app/**/*Controller.js',
        'app/**/*Service.js',
        'app/**/*Directive.js',
        'app/**/*Factory.js'];
        // 'app/**/*.js'];
    return gulp.src(path)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Images
gulp.task('images', function() {
    return gulp.src('assets/img/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/img'))
        .pipe(notify({ message: 'Images task complete' }));
});

// Connected Server
gulp.task('connect', function() {
    connect.server({
        root: './',
        port: 8888,
        livereload: true
    });
});

// Connected Server Dist
gulp.task('connectDist', function() {
    connect.server({
        root: 'dist',
        port: 8889,
        livereload: true
    });
});

// index.html for dist
gulp.task('index', function () {
   // var target = gulp.src('index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    return gulp.src('index.html')
        .pipe(useref({}, lazypipe().pipe(sourcemaps.init, { loadMaps: true })))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('dist'));

});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['lint', 'scripts']);
    gulp.watch('assets/img/*', ['img']);
    // gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('assets/css/**/*.css', ['css']);
});

// Default Task
gulp.task('default', ['lint', 'css', 'scripts','images' , 'watch', 'connect']);
gulp.task('dist', ['lint', 'css', 'scripts', 'images', 'index', 'htmlToJs' ,'allJStoOneJS' ,'watch', 'connectDist']);