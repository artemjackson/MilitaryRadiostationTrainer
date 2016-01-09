"use strict";

import angular from "angular";

import T121SidebarCtrl from "./controller";

export default angular.module("t121.left-sidebar", [])
    .directive("t121LeftSidebar", () => {
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