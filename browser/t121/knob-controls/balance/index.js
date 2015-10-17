"use strict";

import angular from "angular";
import BalanceKnobControlCtrl from "./controller";

export default angular.module("t121.knob-controls.balance", [])
    .directive("t121BalanceKnobControl", () => {
        return {
            bindToController: true,
            controller: BalanceKnobControlCtrl,
            controllerAs: 'ctrl',
            replace: true,
            restrict: "A",
            scope: {
                currentValue: "="
            },
            template: require("./template.html")
        }
    });