"use strict";

import angular from "angular";

import SideCtrl from "./controller";

export default angular.module("b44.side", [])
    .directive("b44Side", ()=> {
        return {
            bindToController: true,
            controller: SideCtrl,
            controllerAs: "ctrl",
            replace: true,
            restrict: "A",
            scope: {
                model: "=",
                side: "@"
            },
            template: require("./template.html")
        }
    });
