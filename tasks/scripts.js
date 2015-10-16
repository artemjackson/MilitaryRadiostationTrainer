"use strict";

import browserify from "browserify";
import config from "./config";
import gulp from "gulp";
import gutil from "gulp-util";
import source from "vinyl-source-stream";

export default function () {
    return browserify(config.scripts.src)
        .bundle()
        .on('error', gutil.log)
        .pipe(source(config.scripts.dest))
        .pipe(gulp.dest(config.publicPath));
};