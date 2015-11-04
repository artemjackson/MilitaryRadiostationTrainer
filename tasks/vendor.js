"use strict";

import concat from "gulp-concat";
import config from "./config";
import gulp from "gulp";

export default function () {
        gulp.src(config.vendor.scripts.src)
            .pipe(concat(config.vendor.scripts.dest))
            .pipe(gulp.dest(config.publicPath));

        gulp.src(config.vendor.styles.src)
            .pipe(concat(config.vendor.styles.dest))
            .pipe(gulp.dest(config.publicPath));

};