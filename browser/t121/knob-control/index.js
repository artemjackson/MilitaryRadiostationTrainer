"use strict";

import angular from "angular";
import KnobControlCtrl from "./controller";

export default angular.module("t121.knob-control", [])
    .directive("t121KnobControl", () => {
        return {
            bindToController: true,
            controller: KnobControlCtrl,
            controllerAs: 'ctrl',
            replace: true,
            restrict: "A",
            scope: {
                config: "=",
                value: "="
            },
            template: require("./template.html")
        }
    });