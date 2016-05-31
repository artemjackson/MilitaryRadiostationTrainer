"use strict";

import angular from "angular";

import radiostationKnobControls from "./knob-controls/index";
import radiostationLightbulb from "./lightbulb/index";
import radiostationLock from "./lock";
import leftSidebar from "./sidebar/left/index";
import rightSidebar from "./sidebar/right/index";
import RadiostationController from "./controller";
import radiostationToggle from "./toggle/index";
import radiostationPowerScale from "./power-scale/index";
import radiostation from "./radiostation/service.js";
import frequencyScale from "./frequency-scale";
import ptt from "./ptt";

export default angular.module("trainer.radiostation", [
        radiostationKnobControls.name,
        radiostationLock.name,
        radiostationLightbulb.name,
        leftSidebar.name,
        rightSidebar.name,
        radiostationToggle.name,
        radiostationPowerScale.name,
        frequencyScale.name,
        ptt.name
    ])
    .config($stateProvider => {
        $stateProvider.state("trainer.radiostation", {
            controller: RadiostationController,
            controllerAs: "ctrl",
            template: require("./template.html"),
            url: "/radiostation"
        });
    });
