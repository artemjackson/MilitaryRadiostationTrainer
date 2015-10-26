"use strict";

import config from "./knobs.config.json";

export default class T121Controller {
    constructor($timeout) {
        this.timeout = $timeout;

        this.frictionErrorPositive = {
            config: config.frictionErrorPositive
        };

        this.latitude = {
            config: config.latitude
        };

        this.frictionErrorNegative = {
            config: config.frictionErrorNegative
        };

        this.balance = {
            config: config.balance
        };

        this.toggles = [];
        this.lightbulbs = [];

        this.isHeated = false;
    }

    toggleWork() {
        this.lightbulbs.work = !this.lightbulbs.work;
    }

    toggleHeating() {
        if (!this.isHeated && !this.timeoutPromise) {
            this.lightbulbs.heating = !this.lightbulbs.heating;
            this.timeoutPromise = this.timeout(() => {
                this.disableHeatingLightbulb();
                this.isHeated = true;
            }, 7 * 1000);
        } else {
            this.disableHeatingLightbulb();
            this.timeout.cancel(this.timeoutPromise);
            this.timeoutPromise = null;
        }
    }

    disableHeatingLightbulb() {
        this.lightbulbs.heating = false;
    }
}