"use strict";

import config from "./knobs.config.json";

import KnobControl from "./knob-control";
import Lightbulb from "./lighbulb";
import Toggle from "./toggle";

export default class T121Service {
    constructor($timeout, $interval, weather) {
        this.timeout = $timeout;
        this.interval = $interval;
        this.weather = weather;

        this.reset();
    }

    reset() {
        this.weather.reset();

        this.formularyValues = {
            latitude: String(this.randomInRange(52, 54)),
            frictionErrorPositive: String(this.randomInRange(5, 15)),
            frictionErrorNegative: String(this.randomInRange(-5, -15)),
            balance: String(this.randomInRange(-120, 120))
        };

        this.knobControls = {
            frictionErrorPositive: new KnobControl(config.frictionErrorPositive),
            latitude: new KnobControl(config.latitude),
            frictionErrorNegative: new KnobControl(config.frictionErrorNegative),
            balance: new KnobControl(config.balance)
        };

        this.lightbulbs = {
            work: new Lightbulb(),
            heating: new Lightbulb()
        };

        this.toggles = {
            transformer: new Toggle(),
            heating: new Toggle(),
            work: new Toggle(),
            gyroscope: new Toggle(),
            control: new Toggle()
        };

        this.secToBeHeated = this.calculateHeatingTime(this.weather.temperature);
        this.isHeatingNeeded = this.defineIfHeatingNeeded(this.secToBeHeated);
        this.invalidateTimeoutPromise();
    }

    toggleWork() {
        this.lightbulbs.work.toggle();
    }

    toggleHeating() {
        if (this.isHeatingNeeded && !this.heatingTimeoutPromise) {
            this.toggleHeatingLightbulb();
            this.heatingTimeoutPromise = this.timeout(() => {
                this.disableHeatingLightbulb();
                this.setAsHeated();
            }, this.secToBeHeated * 1000);
        } else {
            this.disableHeatingLightbulb();
            this.invalidateTimeoutPromise();
        }
    }

    toggleHeatingLightbulb() {
        this.lightbulbs.heating.toggle();
    }

    disableHeatingLightbulb() {
        this.lightbulbs.heating.disable();
    }

    setAsHeated(){
        this.isHeatingNeeded = false;
        this.heatingTimeoutPromise = null;
    }

    invalidateTimeoutPromise() {
        this.timeout.cancel(this.heatingTimeoutPromise);
        this.heatingTimeoutPromise = null;
    }

    randomInRange(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }

    calculateHeatingTime(temperature) {
        return temperature < 0 ? -temperature + 10: 0;
    }

    defineIfHeatingNeeded(secToBeHeated) {
        return !!secToBeHeated;
    }
}