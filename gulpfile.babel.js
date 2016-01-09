import gulp from "gulp";

import electron from "./tasks/electron";
import images from "./tasks/images";
import transpliteApp from "./tasks/transplite-app"
import scripts from "./tasks/scripts";
import styles from "./tasks/styles";
import vendor from "./tasks/vendor";
import watch from "./tasks/watch";

gulp.task("electron", electron);
gulp.task("images", images);
gulp.task("scripts", scripts);
gulp.task("styles", styles);
gulp.task("transplite-app", transpliteApp);
gulp.task("vendor", vendor);
gulp.task("watch", watch);

gulp.task("build", ["scripts", "vendor", "transplite-app", "styles", "images"]);
gulp.task("fast-build", ["scripts", "vendor", "transplite-app", "styles"]);
gulp.task("default", ["fast-build", "electron", "watch"]);