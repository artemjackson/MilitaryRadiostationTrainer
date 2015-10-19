"use strict";

export default class T121ToggleCtrl {
    constructor() {
        this.ENABLED = "ВКЛ";
        this.DISABLED = "ВЫКЛ";
    }

    toggle() {
        this.value = !this.value;
    }

    get condition() {
        return this.value ? this.ENABLED : this.DISABLED;
    }

    set condition(value) {
        if(value === this.ENABLED) {
            this.value = this.ENABLED;
        } else {
            this.value = this.DISABLED;
        }
    }
}