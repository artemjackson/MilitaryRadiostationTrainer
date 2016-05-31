"use strict";

import angular from "angular";


export default angular.module("radiostation.reel.screw", [])
    .directive("reelScrew", () => {
        return {
            restrict: "AE",
            scope: {
                model: "="
            },
            template: require("./template.html")
        }
    });
