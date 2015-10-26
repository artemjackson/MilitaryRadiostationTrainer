"use strict";

import angular from "angular";


import examination from "./examination/index";
import training from "./training/index";
import t121KnobControl from "./knob-control/index";
import t121Lightbolb from "./lightbulb/index";
import t121Sidebar from "./sidebar/index";
import T121Controller from "./controller";
import t121Toggle from "./toggle/index";

export default angular.module("t121", [
        examination.name,
        training.name,
        t121KnobControl.name,
        t121Lightbolb.name,
        t121Sidebar.name,
        t121Toggle.name
    ])
    .config($stateProvider => {
        $stateProvider.state("t121", {
            abstract: true,
            controller: T121Controller,
            controllerAs: "ctrl",
            template: require("./template.html"),
            url: "/t121"
        });
    });