"use strict";

import angular from "angular";

import ExaminerService from "../examiner/service";
import b44 from "./b44/index";
import B44Service from "./b44/b44/service";
import t121 from "./t121/index";
import T121Service from "./t121/t121/service";
import TrainerCtrl from "./controller";
import WeatherService from "./weather/service";

export default angular.module("t121", [
        t121.name,
        b44.name
    ])
    .service('examiner', ExaminerService)
    .service('t121', T121Service)
    .service('b44', B44Service)
    .service('weather', WeatherService)
    .config($stateProvider => {
        $stateProvider.state("trainer", {
            abstract: true,
            controller: TrainerCtrl,
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
            template: require('./template.html'),
            url: "/trainer"
        });
    });