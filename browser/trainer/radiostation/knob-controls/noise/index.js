"use strict";

import angular from "angular";

export default angular.module("radiostation.knob-controls.noise", [])
    .directive("radiostationNoiseKnobControl", () => {
        return {
            restrict: "AE",
            scope: {
                model: "="
            },
            template: require("./template.html")
        }
    });
