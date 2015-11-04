"use strict";

import angular from "angular";

import B44Controller from "./controller";

export default angular.module("b44", [])
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