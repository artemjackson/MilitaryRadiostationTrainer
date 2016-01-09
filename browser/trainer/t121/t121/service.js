"use strict";

import config from "./knobs.config.json";

import KnobControl from "./knob-control";
import Lightbulb from "./lighbulb";
import Toggle from "./toggle";

export default class T121Service {
    constructor($timeout, $interval, weather, $mdDialog) {
        this.timeout = $timeout;
        this.interval = $interval;
        this.weather = weather;
        this.dialog = $mdDialog;

        this.reset();
    }

    reset() {
        this.weather.reset();

        this.formularyValues = {
            latitude: String(this.randomInRange(52, 54)),
            frictionErrorPositive: String(this.randomInRange(1, 10)),
            frictionErrorNegative: String(this.randomInRange(-1, -10)),
            balance: String(this.randomInRange(-40, 40))
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
                this.showModalDialog();
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

    showModalDialog() {
        let alert = this.dialog.alert()
            .title("ГКУ 1Т121")
            .content("Обогрев ГКУ 1T121 окончен! \n Необходимо отключить тумблер обогрева!")
            .ok('Закрыть');

        this.dialog
            .show(alert)
            .finally(function () {
                alert = undefined;
            });
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