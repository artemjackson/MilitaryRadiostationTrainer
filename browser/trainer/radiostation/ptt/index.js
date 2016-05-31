"use strict";

import angular from "angular";

export default angular.module("radiostation.ptt", [])
    .directive("radiostationPtt", () => {
        return {
            restrict: "AE",
            scope: {
                model: "="
            },
            template: require("./template.html")
        }
    })
    .directive("radiostationPttClickArea", () => {
        return {
            restrict: "AE",
            scope: {
                model: "="
            },
            template: require("./click-area.template.html")
        }
    });
