"use strict";

import angular from "angular";

import ExaminerService from "../examiner/service";
import t121KnobControl from "./knob-control/index";
import t121Lightbulb from "./lightbulb/index";
import t121LeftSidebar from "./sidebar/left/index";
import t121RightSidebar from "./sidebar/right/index";
import T121Controller from "./controller";
import t121Toggle from "./toggle/index";
import T121Service from "./t121/service.js";
import WeatherService from "./weather/service.js";

export default angular.module("t121", [
        t121KnobControl.name,
        t121Lightbulb.name,
        t121LeftSidebar.name,
        t121RightSidebar.name,
        t121Toggle.name
    ])
    .service('examiner', ExaminerService)
    .service('t121', T121Service)
    .service('weather', WeatherService)
    .config($stateProvider => {
        $stateProvider.state("t121", {
            controller: T121Controller,
            controllerAs: "ctrl",
            params: {
                mode: 'training',
                reset: false
            },
            resolve: {
                resetNeeded: $stateParams => {
                  return $stateParams.reset;
                },
                mode: $stateParams => {
                    return $stateParams.mode;
                }
            },
            template: require("./template.html"),
            url: "/t121/:mode"
        });
    });