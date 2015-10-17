"use strict";

import angular from "angular";
import FrictionErrorPositiveKnobControlCtrl from "./controller";

export default angular.module("t121.knob-controls.friction-error-positive", [])
    .directive("t121FrictionErrorPositiveKnobControl", () => {
        return {
            bindToController: true,
            controller: FrictionErrorPositiveKnobControlCtrl,
            controllerAs: 'ctrl',
            replace: true,
            restrict: "A",
            scope: {
                currentValue: "="
            },
            template: require("./template.html")
        }
    });