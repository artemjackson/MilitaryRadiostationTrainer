"use strict";

import angular from "angular";

export default angular.module("radiostation.knob-controls.corrector", [])
    .directive("radiostationCorrectorKnobControl", () => {
        return {
            restrict: "AE",
            scope: {
                model: "="
            },
            template: require("./template.html")
        }
    });
