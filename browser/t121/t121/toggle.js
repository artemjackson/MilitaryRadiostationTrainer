'use strict';

import moment from "moment";

export default class Toggle {
    constructor() {
        this.isEnabled = false;
    }

    toggle() {
        this.isEnabled = !this.isEnabled;
    }

    disable() {
        this.isEnabled = false;
    }

    enable() {
        this.isEnabled = true;
    }
};