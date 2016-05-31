"use strict";

import angular from "angular";

export default angular.module("radiostation.power-scale", [])
    .directive("radiostationPowerScale", () => {
        return {
            restrict: "AE",
            scope: {
                model: "="
            },
            template: require("./template.html")
        }
    });
