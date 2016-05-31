"use strict";

import angular from "angular";
import FrequencyScaleCtrl from "./controller";

export default angular.module("radiostation.frequency-scale", [])
    .directive("radiostationFrequencyScale", () => {
        return {
            restrict: "AE",
            scope: {},
            bindToController: {
                model: "="
            },
            controller: FrequencyScaleCtrl,
            controllerAs: "ctrl",
            template: require("./template.html")
        }
    });
