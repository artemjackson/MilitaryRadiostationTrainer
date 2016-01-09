"use strict";

import angular from "angular";
import B44ButtonsHandlerCtrl from "./controller";

export default angular.module("b44.buttons-handler", [])
    .directive("b44ButtonsHandler", () => {
        return {
            bindToController: true,
            controller: B44ButtonsHandlerCtrl,
            controllerAs: "ctrl",
            replace: true,
            restrict: "A",
            scope: {
                model: "=",
                property: "@"
            },
            template: require("./template.html")
        }
    });