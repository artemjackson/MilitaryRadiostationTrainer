"use strict";

import angular from "angular";
import about from "./about/index";
import menu from "./menu/index";
import mouseClickAndHold from "./mouse-click-and-hold/index";
import t121 from "./t121/index"

export default angular.module("app", [
    /*  vendor  */
    "ui.router",
    /*  custom   */
    about.name,
    menu.name,
    mouseClickAndHold.name,
    t121.name
]);