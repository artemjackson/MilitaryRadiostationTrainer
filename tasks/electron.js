"use strict";

import config from "./config";
import gulp from "gulp";
import gutil from "gulp-util";
import path from "path";
import run from "gulp-run";

export default function () {
    return run(config.electron.bin + " " + path.resolve(config.publicPath, config.electron.dest)).exec();
};