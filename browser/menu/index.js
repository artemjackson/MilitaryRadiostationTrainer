"use strict";

import angular from "angular";
import MenuCtrl from "./controller";

export default angular.module("menu", [])
    .config($stateProvider => {
        $stateProvider.state("menu",  {
            controller: MenuCtrl,
            controllerAs: "ctrl",
            template: require("./template.html"),
            url: ""
        });
    });