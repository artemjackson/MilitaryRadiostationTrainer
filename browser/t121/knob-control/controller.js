"use strict";

export default class KnobControllerCtrl {
    constructor() {
        this.initialize();
    }

    get currentValue() {
        return this._currentValue;
    }

    set currentValue(value) {
        this._currentValue = value;
        value = Number(value);

        if (value >= this._minValue && value <= this._maxValue) {

            this.currentAngle = this._minAngle + (value - this._minValue) * this._angleOnValue;

            console.log(this.currentAngle)
        }
    }

    initialize() {
        this._initValue = Number(this.initValue);
        this._minValue = Number(this.minValue);
        this._maxValue = Number(this.maxValue);

        this._initAngle = Number(this.initAngle);
        this._minAngle = Number(this.minAngle);
        this._maxAngle = Number(this.maxAngle);

        const angleRange = Math.abs(this._maxAngle - this._minAngle);
        const valueRange = Math.abs(this._maxValue - this._minValue);
        this._angleOnValue = angleRange / valueRange;

        this.currentValue = this._initValue;
    }

    increase() {
        if (this.currentValue < this._maxValue) {
            this.currentValue++;
        }
    }

    decrease() {
        if (this.currentValue > this._minValue) {
            this.currentValue--;
        }
    }
}