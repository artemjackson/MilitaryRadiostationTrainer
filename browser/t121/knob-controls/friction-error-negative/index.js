"use strict";

import angular from "angular";
import FrictionErrorNegativeKnobControlCtrl from "./controller";

export default angular.module("t121.knob-controls.friction-error-negative", [])
    .directive("t121FrictionErrorNegativeKnobControl", () => {
        return {
            bindToController: true,
            controller: FrictionErrorNegativeKnobControlCtrl,
            controllerAs: 'ctrl',
            replace: true,
            restrict: "A",
            scope: {
                currentValue: "="
            },
            template: require("./template.html")
        }
    });