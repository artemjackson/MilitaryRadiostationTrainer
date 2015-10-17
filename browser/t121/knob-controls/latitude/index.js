"use strict";

import angular from "angular";
import LatitudeKnobControlCtrl from "./controller";

export default angular.module("t121.knob-controls.latitude", [])
    .directive("t121LatitudeKnobControl", () => {
        return {
            bindToController: true,
            controller: LatitudeKnobControlCtrl,
            controllerAs: 'ctrl',
            replace: true,
            restrict: "A",
            scope: {
                currentValue: "="
            },
            template: require("./template.html")
        }
    });