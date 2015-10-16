"use strict";

import angular from "angular";

export default angular.module("about", [])
    .config($stateProvider => {
        $stateProvider.state("about",  {
            template: require("./template.html"),
            url: "/about"
        });

    });