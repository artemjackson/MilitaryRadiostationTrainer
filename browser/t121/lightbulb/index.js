"use strict";

import angular from "angular";

import T121LightbulbCtrl from "./controller";

export default angular.module("t121.lightbulb", [])
    .directive("t121Lightbulb", () => {
        return {
            bindToController: true,
            controller: T121LightbulbCtrl,
            controllerAs: 'ctrl',
            replace: true,
            restrict: "A",
            scope: {
                isEnabled: "="
            },
            template: require("./template.html")
        }
    });