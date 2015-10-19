"use strict";

import angular from "angular";

import T121SidebarCtrl from "./controller";

export default angular.module("t121.sidebar", [])
    .directive("t121Sidebar", () => {
        return {
            bindToController: true,
            controller: T121SidebarCtrl,
            controllerAs: 'ctrl',
            replace: true,
            restrict: "A",
            scope: {
                frictionErrorPositive: "=",
                latitude: "=",
                frictionErrorNegative: "=",
                balance: "=",

                transformation: "=",
                heating: "=",
                gyroscope: "=",
                work: "=",
                control: "="
            },
            template: require("./template.html")
        }
    });