"use strict";

import config from "knobs.config.json";

export default class T121Controller {
    constructor() {
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
    }
}