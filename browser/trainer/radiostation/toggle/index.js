"use strict";

import angular from "angular";

export default angular.module("radiostation.toggle", [])
    .directive("radiostationToggle", () => {
        return {
            restrict: "AE",
            scope: {
                model: "="
            },
            template: require("./template.html")
        }
    });
