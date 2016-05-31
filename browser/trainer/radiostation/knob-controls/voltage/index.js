"use strict";

import angular from "angular";

export default angular.module("radiostation.knob-controls.voltage", [])
    .directive("radiostationVoltageKnobControl", () => {
        return {
            restrict: "AE",
            scope: {
                model: "="
            },
            template: require("./template.html")
        }
    });
