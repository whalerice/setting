const { readFileSync } = require('fs');
const { src, watch, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');
const htmlmin = require('gulp-html-minifier');
const terser = require('gulp-terser'); //uglify 기능 ES6지원
const rev = require('gulp-rev');
const revRewrite = require('gulp-rev-rewrite');
const rimraf = require('gulp-rimraf');
const imagemin = require('gulp-imagemin');

// Dev
function html() {
	return src('src/*.html').pipe(connect.reload());
}

function scss() {
	return src('src/scss/*.scss')
		.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
		.pipe(autoprefixer(['last 3 versions'], { cascade: true }))
		.pipe(dest('src/css'))
		.pipe(connect.reload());
}

function js() {
	return src('src/js/*.js').pipe(connect.reload());
}

async function watching() {
	watch('src/scss/*.scss', scss);
	watch('src/*.html', html);
	watch('src/js/*.js', js);
}

async function server() {
	connect.server({
		root: './src',
		livereload: true,
		port: 8001,
	});
}

// production
function clean() {
	return src('build',{ read: false })
		.pipe(rimraf());
}
function minify() {
	const manifest = readFileSync('build/rev-manifest.json');
	return src('src/*.html')
		.pipe(revRewrite({ manifest }))
		.pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
		.pipe(dest('build'));
}

function css() {
	return src('src/scss/*.scss')
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(autoprefixer(['last 3 versions'], { cascade: true }))
		.pipe(dest('build/css'));
}

function file() {
	return src('src/fonts/**/*.*')
		.pipe(dest('build/fonts'));
}

function scripts() {
	return src('src/js/*.js')
		.pipe(terser())
		.pipe(dest('build/js'));
}

function img() {
	return src(['src/images/**/*.*'])
		.pipe(imagemin())
		.pipe(dest('build/images'));
}

function rename() {
  return src('build/**/*.{css,js}')
    .pipe(rev())
    .pipe(dest('build'))
    .pipe(rev.manifest())
    .pipe(dest('build'));
}

exports.dev = series(server, watching);
// exports.build = series(clean, css, scripts,img, file, minify);

exports.build = series(clean, css, scripts,rename,img, file, minify);
