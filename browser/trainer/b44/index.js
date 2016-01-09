"use strict";

import angular from "angular";

import B44Controller from "./controller";
import b44ButtonsHandler from "./buttons-handler/index";
import b44LeftSidebar from "./sidebar/left/index";
import b44RightSidebar from "./sidebar/right/index";
import b44Side from "./side/index.js"
import map from "./map/index";
import topSide from "./top-side/index";
import leftSide from "./left-side/index";

export default angular.module("trainer.b44", [
        b44ButtonsHandler.name,
        b44LeftSidebar.name,
        b44RightSidebar.name,
        b44Side.name,
        map.name,
        leftSide.name,
        topSide.name
    ])
    .config($stateProvider => {
        $stateProvider.state("trainer.b44", {
            controller: B44Controller,
            controllerAs: "ctrl",
            template: require("./template.html"),
            url: "/b44"
        });
    });