"use strict";

import angular from "angular";

import T121SidebarCtrl from "./controller";

export default angular.module("b44.left-sidebar", [])
    .directive("b44LeftSidebar", () => {
        return {
            bindToController: true,
            controller: T121SidebarCtrl,
            controllerAs: 'ctrl',
            replace: true,
            restrict: "A",
            scope: {},
            template: require("./template.html")
        }
    });