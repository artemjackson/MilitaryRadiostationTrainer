"use strict";

import angular from "angular";

export default angular.module("radiostation.knob-controls.fixed-frequencies", [])
    .directive("radiostationFixedFrequenciesKnobControl", () => {
        return {
            restrict: "AE",
            scope: {
                model: "=",
                beforeChange: "&",
                afterChange: "&"
            },
            template: require("./template.html")
        }
    });
