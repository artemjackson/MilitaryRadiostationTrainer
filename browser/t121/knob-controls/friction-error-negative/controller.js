"use strict";

export default class FrictionErrorNegativeKnobControllerCtrl {
    constructor() {
        this.minValue = -23;
        this.maxValue = 0;
        this.currentValue = 0;

        this.minAngle = 0;
        this.maxAngle= 140;
        this.currentAngle = this.minAngle;

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