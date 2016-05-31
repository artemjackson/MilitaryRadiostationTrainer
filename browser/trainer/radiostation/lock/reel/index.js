"use strict";

import angular from "angular";
import screw from "./screw";
import ReelCtrl from "./controller";

export default angular.module("radiostation.reel", [
        screw.name
    ])
    .directive("radiostationReel", () => {
        return {
            bindToController: true,
            controller: ReelCtrl,
            controllerAs: 'ctrl',
            restrict: "AE",
            scope: {
                model: "="
            },
            template: require("./template.html")
        }
    });
