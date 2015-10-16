"use strict";

import angular from "angular";
import knobControl from "./knob-control/index";
import training from "./training/index";
import examination from "./examination/index";
import T121Controller from "./controller";

export default angular.module("t121", [
        knobControl.name,
        training.name,
        examination.name
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