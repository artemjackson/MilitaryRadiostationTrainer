"use strict";

import concat from "gulp-concat";
import config from "./config";
import gulp from "gulp";

export default function () {
        return gulp.src(config.vendor.src)
            .pipe(concat(config.vendor.dest))
            .pipe(gulp.dest(config.publicPath));
};