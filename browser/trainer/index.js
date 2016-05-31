"use strict";

import angular from "angular";

import ExaminerService from "../examiner/service";
import radiostation from "./radiostation/index";
import radiostationService from "./radiostation/radiostation/service";
import TrainerCtrl from "./controller";

export default angular.module("radiostation", [
        radiostation.name,
    ])
    .service('examiner', ExaminerService)
    .service('radiostation', radiostationService)
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
