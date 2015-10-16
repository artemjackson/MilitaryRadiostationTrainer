"use strict";

import config from "./config";
import gulp from "gulp";
import rename from "gulp-rename";
import babel from "gulp-babel";

export default function(){
    return gulp.src(config.electron.src)
        .pipe(babel())
        .pipe(rename(config.electron.dest))
        .pipe(gulp.dest(config.publicPath));
}