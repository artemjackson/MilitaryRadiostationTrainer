"use strict";

export default class T121ToggleCtrl {
    toggle() {
        this.isEnabled = !this.isEnabled;
    }

    get isEnabled() {
        return this.enabled;
    }

    set isEnabled(value) {
       this.enabled = !!value;
    }
}