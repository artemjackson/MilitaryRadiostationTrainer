export default {
    publicPath: "build/",

    electron: {
        src: "app/index.js",
        dest: "index.min.js",
        bin: "./node_modules/electron-prebuilt/cli.js"
    },

    scripts: {
        src: "browser/index.js",
        dest: "app.min.js"
    },

    styles: {
        src: "browser/**/*.css",
        dest: "style.min.css"
    },

    vendor: {
        src: [
            "bower_components/angular/angular.min.js",
            "bower_components/angular-ui-router/release/angular-ui-router.min.js"
        ],
        dest: "vendor.min.js"
    }
}