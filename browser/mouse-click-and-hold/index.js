"use strict";

import angular from "angular";

export default angular.module("mouse-click-and-hold", [])
    .directive("mouseClickAndHold", ($interval, $parse) => {
        return {
            link: (scope, element, attrs) => {
                const interval = scope.interval;
                const action = scope.mouseClickAndHold;

                let intervalPromise = null;

                element.on("mousedown", (e) => {
                    e.preventDefault();
                    intervalPromise = $interval(()=> {
                       action();
                    }, interval);
                });

                element.on("mouseup", () => {
                    $interval.cancel(intervalPromise);
                })
            },
            restrict: "A",
            scope: {
                mouseClickAndHold: "&",
                interval: "@"
            }
        }
    });