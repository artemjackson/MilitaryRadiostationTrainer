"use strict";

import angular from "angular";
import about from "./about/index";
import menu from "./menu/index";
import mouseClickAndHold from "./mouse-click-and-hold/index";
import t121 from "./t121/index";
import b44 from "./b44/index";

export default angular.module("app", [
        /*  vendor  */
        "ui.router",
        "ngMaterial",
        /*  custom   */
        about.name,
        mouseClickAndHold.name,
        t121.name,
        b44.name,
         menu.name
    ]);