"use strict";

import config from "./knobs.config.json";

export default class T121Controller {
    constructor($timeout) {
        this.timeout = $timeout;

        this.knobControls = {
            frictionErrorPositive: {
                config: config.frictionErrorPositive
            },
            latitude: {
                config: config.latitude
            },
            frictionErrorNegative: {
                config: config.frictionErrorNegative
            },
            balance: {
                config: config.balance
            }
        };

        this.toggles = {
            transformer: {},
            heating: {},
            work: {},
            gyroscope: {},
            control: {}
        };
        this.lightbulbs = {
            work: {},
            heating: {}
        };

        this.isHeated = false;
        this.secToBeHeated = 15;
    }

    toggleWork() {
        this.lightbulbs.work.isEnabled = !this.lightbulbs.work.isEnabled;
    }

    toggleHeating() {
        if (!this.isHeated && !this.timeoutPromise) {
            this.toggleHeatingLightbulb();
            this.timeoutPromise = this.timeout(() => {
                this.disableHeatingLightbulb();
                this.isHeated = true;
            }, this.secToBeHeated * 1000);
        } else {
            this.disableHeatingLightbulb();
            this.timeout.cancel(this.timeoutPromise);
            this.timeoutPromise = null;
        }
    }

    toggleHeatingLightbulb(){
        this.lightbulbs.heating.isEnabled = !this.lightbulbs.heating.isEnabled;
    }

    disableHeatingLightbulb() {
        this.lightbulbs.heating.isEnabled = false;
    }
}