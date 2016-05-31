"use strict";

export default class RadiostationController {
    constructor(radiostation, examiner) {
        this.radiostation = radiostation;
        this.examiner = examiner;
    }

    get antennaTunerIsOk() {
        return Math.abs(this.radiostation.knobControls.antennaTuner.value - this.radiostation.desiredAntenna) <= 5;
    }
}
