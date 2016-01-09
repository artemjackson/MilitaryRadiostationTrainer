export default {
    publicPath: "build/",

    electron: {
        src: "app/index.js",
        dest: "index.min.js",
        bin: "electron"
    },

    scripts: {
        src: "browser/index.js",
        dest: "app.min.js"
    },

    styles: {
        src: "browser/**/*.css",
        dest: "style.min.css"
    },

    images: {
        src: [
            "browser/**/*.png",
            "browser/**/*.jpg",
            "browser/**/*.svg"
        ],
        dest: "img/"
    },

    vendor: {
        scripts: {
            src: [
                "bower_components/angular/angular.min.js",
                "bower_components/angular-ui-router/release/angular-ui-router.min.js",
                "bower_components/moment/min/moment.min.js",
                "bower_components/angular-animate/angular-animate.min.js",
                "bower_components/angular-aria/angular-aria.min.js",
                "bower_components/angular-material/angular-material.min.js"
            ],
            dest: "vendor.min.js"
        },
        styles: {
            src: [
                "bower_components/angular-material/angular-material.min.css"
            ],
            dest: "vendor.min.css"
        }
    }
}