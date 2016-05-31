import angular from "angular";

import voltage from "./voltage";
import volume from "./volume";
import corrector from "./corrector";
import noise from "./noise";
import frequency from "./frequency";
import fixedFrequencies from "./fixed-frequencies";
import antennaTuner from "./antenna-tuner";

export default angular.module("radiostation.knob-kontrols", [
    voltage.name,
    volume.name,
    corrector.name,
    noise.name,
    frequency.name,
    fixedFrequencies.name,
    antennaTuner.name
]);
