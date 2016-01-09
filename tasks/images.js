"use strict";

import config from "./config";
import gulp from "gulp";
import image from "gulp-image";

export default function () {
    return gulp.src(config.images.src)
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            advpng: true,
            jpegRecompress: false,
            jpegoptim: true,
            mozjpeg: true,
            gifsicle: true,
            svgo: true
        }))
        .pipe(gulp.dest(config.publicPath + config.images.dest));

};