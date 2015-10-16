"use strict";

import angular from "angular";
import KnobControllerCtrl from "./controller";

export default angular.module("t121.knob-control", [])
    .directive("t121KnobControl", () => {
        return {
            bindToController: true,
            controller: KnobControllerCtrl,
            controllerAs: 'ctrl',
            replace: true,
            restrict: "A",
            scope: {
                currentValue: "=",
                initValue: "@",
                minValue: "@",
                maxValue: "@",
                initAngle: "@",
                minAngle: "@",
                maxAngle: "@"
            },
            template: require("./template.html")
        }
    });