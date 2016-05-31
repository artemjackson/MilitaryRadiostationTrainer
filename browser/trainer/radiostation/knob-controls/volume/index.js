"use strict";

import angular from "angular";

export default angular.module("radiostation.knob-controls.volume", [])
    .directive("radiostationVolumeKnobControl", () => {
        return {
            restrict: "AE",
            scope: {
                model: "="
            },
            template: require("./template.html")
        }
    });
