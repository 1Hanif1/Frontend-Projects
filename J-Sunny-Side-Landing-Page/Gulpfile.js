const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { src, dest } = require('vinyl-fs');
const loc = './J-Sunny-Side-Landing-Page';

async function saveFile() {
	src('./index.html').pipe(dest(loc));
}

async function saveJS() {
	src('./js/script.js').pipe(dest(`${loc}/js`));
}

async function compileSass() {
	src('./Sass/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(dest(`${loc}/css`));
}

async function watch() {
	gulp.watch(`./index.html`, saveFile);
	gulp.watch(`./Sass/*.scss`, compileSass);
	gulp.watch(`./JS/script.js`, saveJS);
}

gulp.task('saveFile', saveFile);

gulp.task('compileSass', compileSass);

gulp.task('watch', watch);
