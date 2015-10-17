"use strict";

export default class LatitudeKnobControlCtrl {
    constructor() {
        this.minValue = 0;
        this.firstThresholdValue = 40;
        this.secondThresholdValue = 50;
        this.thirdThresholdValue = 60;
        this.forthThresholdValue = 70;
        this.maxValue = 90;

        this.currentValue = 0;

        this.minAngle = -135;
        this.firstThresholdAngle = 40;
        this.secondThresholdAngle = 70;
        this.thirdThresholdAngle = 100;
        this.forthThresholdAngle = 120;
        this.currentAngle = this.minAngle;
        this.maxAngle = 136;

        const angleRange = this.firstThresholdAngle - this.minAngle;
        const firstThresholdAngleRange = this.secondThresholdAngle - this.firstThresholdAngle;
        const secondThresholdAngleRange = this.thirdThresholdAngle - this.secondThresholdAngle;
        const thirdThresholdAngleRange = this.forthThresholdAngle - this.thirdThresholdAngle;
        const forthThresholdAngleRange = this.maxAngle - this.forthThresholdAngle;

        const valueRange = this.firstThresholdValue - this.minValue;
        const firstThresholdValueRange = this.secondThresholdValue - this.firstThresholdValue;
        const secondThresholdValueRange = this.thirdThresholdValue - this.secondThresholdValue;
        const thirdThresholdValueRange = this.forthThresholdValue - this.thirdThresholdValue;
        const forthThresholdValueRange = this.maxValue - this.forthThresholdValue;

        this.angleOnValue = angleRange / valueRange;
        this.angleOnValueFirstTreshold = firstThresholdAngleRange / firstThresholdValueRange;
        this.angleOnValueSecondThreshold = secondThresholdAngleRange / secondThresholdValueRange;
        this.angleOnValueThirdThreshold = thirdThresholdAngleRange / thirdThresholdValueRange;
        this.angleOnValueForthThreshold = forthThresholdAngleRange / forthThresholdValueRange;
    }

    get currentValue() {
        return this._currentValue;
    }

    set currentValue(value) {
        this._currentValue = value;
        value = Number(value);


        if (value >= this.minValue && value <= this.firstThresholdValue) {
            this.currentAngle = this.minAngle + value * this.angleOnValue;
        }

        if (value > this.firstThresholdValue && value <= this.secondThresholdValue) {
            console.log(this.firstThresholdAngle, this.angleOnValueFirstTreshold);
            this.currentAngle = this.firstThresholdAngle + (value - this.firstThresholdValue) * this.angleOnValueFirstTreshold;
        }

        if (value > this.secondThresholdValue && value <= this.thirdThresholdValue) {
            this.currentAngle = this.secondThresholdAngle + (value - this.secondThresholdValue) * this.angleOnValueSecondThreshold;
        }

        if (value > this.thirdThresholdValue && value <= this.forthThresholdValue) {
            this.currentAngle = this.thirdThresholdAngle + (value - this.thirdThresholdValue) * this.angleOnValueThirdThreshold;
        }

        if (value > this.forthThresholdValue && value <= this.maxValue) {
            this.currentAngle = this.forthThresholdAngle + (value - this.forthThresholdValue) * this.angleOnValueForthThreshold;
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