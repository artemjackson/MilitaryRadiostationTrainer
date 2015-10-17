"use strict";

export default class BalanceKnobControlCtrl {
    constructor() {
        this.minValue = -228;
        this.maxValue = 228;
        this.currentValue = 0;

        this.minAngle = -141;
        this.maxAngle= 141;
        this.currentAngle = 0;

        const angleRange = this.maxAngle - this.minAngle;
        const valueRange = this.maxValue - this.minValue;

        this.angleOnValue = angleRange / valueRange;
    }

    get currentValue() {
        return this._currentValue;
    }

    set currentValue(value) {
        this._currentValue = value;
        value = Number(value);

        if (value >= this.minValue && value <= this.maxValue) {
            this.currentAngle = -value * this.angleOnValue;
        }
    }

    increase() {
        if (this.currentValue < this.maxValue) {
            this.currentValue++;
        }
    }

    decrease() {
        if (this.currentValue > this.minValue) {
            this.currentValue--;
        }
    }
}