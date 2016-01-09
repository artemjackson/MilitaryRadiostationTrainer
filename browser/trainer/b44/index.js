"use strict";

import angular from "angular";

import B44Controller from "./controller";
import B44Service from "./b44/service";
import ExaminerService from "../examiner/service";

export default angular.module("b44", [])
    .service('b44', B44Service)
    .service('examiner', ExaminerService)
    .config($stateProvider => {
        $stateProvider.state("b44", {
            controller: B44Controller,
            controllerAs: "ctrl",
            params: {
                mode: 'training'
            },
            resolve: {
                mode: $stateParams => {
                    return $stateParams.mode;
                }
            },
            template: require("./template.html"),
            url: "/b44/:mode"
        });
    });