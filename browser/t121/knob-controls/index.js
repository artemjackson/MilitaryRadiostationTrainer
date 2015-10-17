"use strict";

import angular from "angular";

import balanceKnobControl from "./balance/index";
import frictionErrorPositiveKnobControl from "./friction-error-positive/index";
import frictionErrorNegativeKnobControl from "./friction-error-negative/index";
import latitudeKnobControl from "./latitude/index.js";

export default angular.module("t121.knob-controls", [
    balanceKnobControl.name,
    frictionErrorPositiveKnobControl.name,
    frictionErrorNegativeKnobControl.name,
    latitudeKnobControl.name
]);