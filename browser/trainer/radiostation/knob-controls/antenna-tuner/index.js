"use strict";

import angular from "angular";

export default angular.module("radiostation.knob-controls.antenna-tuner", [])
    .directive("radiostationAntennaTunerKnobControl", () => {
        return {
            restrict: "AE",
            scope: {
                model: "="
            },
            template: require("./template.html")
        }
    });
