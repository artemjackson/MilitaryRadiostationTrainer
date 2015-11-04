"use strict";

import angular from "angular";

import T121ToggleCtrl from "./controller";

export default angular.module("t121.toggle", [])
    .directive("t121Toggle", () => {
        return {
            bindToController: true,
            controller: T121ToggleCtrl,
            controllerAs: 'ctrl',
            replace: true,
            restrict: "A",
            scope: {
                model: "="
            },
            template: require("./template.html")
        }
    });