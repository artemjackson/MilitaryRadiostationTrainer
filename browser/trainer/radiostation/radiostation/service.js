"use strict";

import config from "./knobs.config.json";
//
import KnobControl from "./knob-control";
//import Lightbulb from "./lighbulb";
import Toggle from "./toggle";
import Lock from "./lock";
import Reel from "./reel";

export default class RadiostationService {
    constructor($timeout, $interval, $mdDialog) {
        this.timeout = $timeout;
        this.interval = $interval;
        this.dialog = $mdDialog;

        this.reset();
    }

    get currentFrequencyRange() {
        const frequencyValue = this.knobControls.fixedFrequencies.value;
        let isFirstRange;

        if(frequencyValue === 0) { isFirstRange = this.toggles.frequency1range1.isEnabled ; }
        if(frequencyValue === 1) { isFirstRange = this.toggles.frequency2range1.isEnabled; }
        if(frequencyValue === 2) { isFirstRange = this.toggles.frequency3range1.isEnabled; }
        if(frequencyValue === 3) { isFirstRange = this.toggles.frequency4range1.isEnabled; }

        return isFirstRange ? 1 : 2;
    }

    reset() {
        this.desiredFrequency = randomInRange(26375, 28625, 25);
        this.desiredAntenna = randomInRange(0, 100);

        this.ptt = new Toggle();

        this.knobControls = this.initializeKnobControls(config);

        this.reel = this.knobControls.reel;

        this.lock = new Lock();

        this.toggles = {
            scale: new Toggle(),
            tone: new Toggle(),
            power: new Toggle(),

            frequency1range1: new Toggle(),
            frequency2range1: new Toggle(),
            frequency3range1: new Toggle(),
            frequency4range1: new Toggle()
        };

        this.freqConfigs = [
            new FrequencyConfigurtion(this.knobControls),
            new FrequencyConfigurtion(this.initializeKnobControls(config)),
            new FrequencyConfigurtion(this.initializeKnobControls(config)),
            new FrequencyConfigurtion(this.initializeKnobControls(config))
        ];

        this._promises = {};
    }

    initializeKnobControls(config){
        const reel = new Reel(config.reel);

        const knobControls = {
            voltage: new KnobControl(config.voltage),
            volume: new KnobControl(config.volume),
            corrector: new KnobControl(config.simplex),
            noise: new KnobControl(config.noise),
            frequency: new KnobControl(config.frequency),
            fixedFrequencies: new KnobControl(config.fixedFrequencies),
            antennaTuner: new KnobControl(config.antennaTuner),
            reel: reel
        };

        knobControls.frequency.value = reel.value;

        return knobControls;
    }

    saveFixedFrequency(id) {
        const promises = Object.getOwnPropertyNames(this._promises);
        if(promises.length > 0) {
            promises.forEach(id => {
                this.unsetPromise(id);
            });
        } else {
            this.freqConfigs[id] = new FrequencyConfigurtion(this.knobControls);
        }
    }

    setFixedFrequency(id) {
        const config = this.freqConfigs[id];
        const { antennaTuner, frequency,  reel } = this.knobControls;

        this.setValueSmooth(antennaTuner, config.antennaTuner);
        this.setValueSmooth(frequency, config.frequency);
        this.setValueSmooth(reel, config.reel);
    }

    setValueSmooth(model, desiredValue){
        if(this._promises[model.id]) this.interval.cancel(this._promises[model.id]);

        const currentValue = model.value;
        const delay = model.rotationSpeed;
        const ticks = Math.abs(currentValue - desiredValue) / model.step;

        if(ticks !== 0){
            this._promises[model.id] = this.interval(() => {
                if(model.value < desiredValue) model.increase();
                if(model.value > desiredValue) model.decrease();
            }, delay, ticks);

            this._promises[model.id].then(() => this.unsetPromise(model.id));
        }
    }

    unsetPromise(promiseId) {
        this.interval.cancel(this._promises[promiseId]);
        delete this._promises[promiseId];
    }
}

class FrequencyConfigurtion {
    constructor(knobControls) {
        const { antennaTuner, frequency } = knobControls;
        this.antennaTuner = antennaTuner.value;
        this.frequency = frequency.value;
        this.reel = frequency.value;
    }
}

function randomInRange(min, max, multiplicity = 1){
    const rand = Math.floor(Math.random() * (max + 1 - min) + min);
    return rand - rand % multiplicity;
}
