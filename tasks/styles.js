"use strict";

import concat from "gulp-concat";
import config from "./config";
import gulp from "gulp";
import minifyCss from "gulp-minify-css";

export default function () {
    return gulp.src(config.styles.src)
        .pipe(minifyCss())
        .pipe(concat(config.styles.dest))
        .pipe(gulp.dest(config.publicPath));
};