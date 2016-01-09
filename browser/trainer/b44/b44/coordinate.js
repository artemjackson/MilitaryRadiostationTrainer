"use strict";

export default class Coordinate {
    static get step() {
        return 10;
    }

    constructor(initialValue, config) {
        this.value = initialValue;
        this.minValue = config.minValue;
        this.maxValue = config.maxValue;

        this.minPercent = config.minPercent;
        this.maxPercent = config.maxPercent;

        const percentsRange = this.maxPercent - this.minPercent;
        const valueRange = this.maxValue - this.minValue;

        this.percentPerValue = percentsRange / valueRange;
    }

    increase() {
        if (this.value < this.maxValue) {
            this.value += Coordinate.step;
        }
    }

    decrease() {
        if (this.value > this.minValue) {
            this.value -= Coordinate.step;
        }
    }

    inPercents() {
        return this.minPercent + this.percentPerValue * (this.value - this.minValue);
    }
}