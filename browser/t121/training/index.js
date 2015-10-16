"use strict";

import angular from "angular";

export default angular.module("t121.training", [])
    .config($stateProvider => {
        $stateProvider.state("t121.training", {
            url: "/training"
        });
    });