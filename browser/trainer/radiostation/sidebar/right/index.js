"use strict";

import angular from "angular";

import RightSidebarCtrl from "./controller";

export default angular.module("right-sidebar", [])
    .directive("rightSidebar", () => {
        return {
            bindToController: true,
            controller: RightSidebarCtrl,
            controllerAs: 'ctrl',
            replace: true,
            restrict: "A",
            scope: {},
            template: require("./template.html")
        }
    });
