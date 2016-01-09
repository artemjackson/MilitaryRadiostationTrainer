"use strict";

import angular from "angular";
import about from "./about/index";
import menu from "./menu/index";
import mouseClickAndHold from "./mouse-click-and-hold/index";
import trainer from "./trainer/index";

export default angular.module("app", [
        /*  vendor  */
        "ui.router",
        "ngMaterial",
        /*  custom   */
        about.name,
        mouseClickAndHold.name,
        trainer.name,
        menu.name
    ]);