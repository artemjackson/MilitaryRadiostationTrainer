"use strict";

export default class Angle {
    constructor(value) {
        this._value = value;
        this.step = 10;
    }

    get value() {
        const wholePart = Math.floor(this._value / 100);
        const redundantPart = Math.floor(this._value % 100);
        const wholePartString = wholePart > 9 ? wholePart : "0" + wholePart;
        const redundantPartString = redundantPart > 9 ? redundantPart : "0" + redundantPart;

        return wholePartString + " - " + redundantPartString;
    }

    set value(value) {
        this._value = value;
    }

    increase() {
        if (this._value >= 6000) {
            this._value %= 6000;
        }

        this._value += this.step;
    }

    decrease() {
        if (this._value <= 0) {
            this._value += 6000;
        }

        this._value -= this.step;
    }
}