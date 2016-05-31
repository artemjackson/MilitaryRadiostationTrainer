"use strict";

import angular from "angular";

import LeftSidebarCtrl from "./controller";

export default angular.module("left-sidebar", [])
    .directive("leftSidebar", () => {
        return {
            bindToController: true,
            controller: LeftSidebarCtrl,
            controllerAs: 'ctrl',
            replace: true,
            restrict: "A",
            scope: {},
            template: require("./template.html")
        }
    });
