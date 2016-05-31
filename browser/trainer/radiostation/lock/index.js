"use strict";

import angular from "angular";
import reel from "./reel";
import LockCtrl from "./controller";

export default angular.module("radiostation.lock", [
        reel.name
    ])
    .directive("radiostationLock", () => {
        return {
            bindToController: true,
            controller: LockCtrl,
            controllerAs: 'ctrl',
            restrict: "AE",
            scope: {
                lock: "=",
                reel: "="
            },
            template: require("./template.html")
        }
    });
