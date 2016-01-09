"use strict";

import angular from "angular";

import t121KnobControl from "./knob-control/index";
import t121Lightbulb from "./lightbulb/index";
import t121LeftSidebar from "./sidebar/left/index";
import t121RightSidebar from "./sidebar/right/index";
import T121Controller from "./controller";
import t121Toggle from "./toggle/index";
import T121Service from "./t121/service.js";

export default angular.module("trainer.t121", [
        t121KnobControl.name,
        t121Lightbulb.name,
        t121LeftSidebar.name,
        t121RightSidebar.name,
        t121Toggle.name
    ])
    .config($stateProvider => {
        $stateProvider.state("trainer.t121", {
            controller: T121Controller,
            controllerAs: "ctrl",
            template: require("./template.html"),
            url: "/t121"
        });
    });