"use strict";

import angular from "angular";

export default angular.module("radiostation.knob-controls.frequency", [])
    .directive("radiostationFrequencyKnobControl", () => {
        return {
            restrict: "AE",
            scope: {
                model: "="
            },
            template: require("./template.html")
        }
    });
