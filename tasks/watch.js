"use strict";

import browserify from "browserify";
import config from "./config";
import gulp from "gulp";
import gutil from "gulp-util";
import source from "vinyl-source-stream";
import watchify from "watchify";

export default function () {
    const bundler = watchify(browserify(config.scripts.src));

    bundler.on('update', rebuild);
    bundler.on('update', gutil.log);
    bundler.on('error', gutil.log);

    function rebuild() {
        bundler
            .bundle()
            .pipe(source(config.scripts.dest))
            .pipe(gulp.dest(config.publicPath));
    }

    rebuild();

    gulp.watch(config.styles.src, ["styles"]);
};