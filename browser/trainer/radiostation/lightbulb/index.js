"use strict";

import angular from "angular";

import radiostationLightbulbCtrl from "./controller";

export default angular.module("radiostation.lightbulb", [])
    .directive("radiostationLightbulb", () => {
        return {
            bindToController: true,
            controller: radiostationLightbulbCtrl,
            controllerAs: 'ctrl',
            replace: false,
            restrict: "AE",
            scope: {
                desired: "=",
                enabled: "=",
                actual: "=",
            },
            template: require("./template.html")
        }
    });
