"use strict";

import angular from "angular";

export default angular.module("mouse-click-and-hold", [])
    .directive("mouseClickAndHold", ($interval) => {
        return {
            link: (scope, element) => {
                const interval = scope.interval;
                const action = scope.mouseClickAndHold;

                let intervalPromise = null;

                bindBeginAction();

                function bindBeginAction(){
                    element.on("mousedown", beginAction);
                }

                function bindEndAction(){
                    element.on("mouseup", endAction);
                    element.on("mouseleave", endAction);
                }

                function beginAction(e){
                    e.preventDefault();
                    intervalPromise = $interval(()=> {
                        action();
                    }, interval);
                    bindEndAction();
                }

                function endAction(){
                    $interval.cancel(intervalPromise);
                    unbindEndAction();
                }

                function unbindEndAction(){
                    element.off("mouseup");
                    element.off("mouseleave");
                }
            },
            restrict: "A",
            scope: {
                mouseClickAndHold: "&",
                interval: "="
            }
        }
    });
