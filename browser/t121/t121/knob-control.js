"use strict";

export default class KnobControl {
    constructor(config) {
        this.marks = config.marks;
        this.rotationSpeed = config.rotationSpeed;

        this.minValue = this.marks[0].value;
        this.maxValue = this.marks[this.marks.length - 1].value;

        this.value = 0;
    }

    get value() {
        return String(this._value);
    }

    set value(value) {
        this._value = value;

        value = Number(value);

        if (this.marks) {
            for (let i = 1; i < this.marks.length; ++i) {
                const leftMark = this.marks[i - 1];
                const rightMark = this.marks[i];

                if (value >= leftMark.value && value <= rightMark.value) {
                    const angleRange = rightMark.angle - leftMark.angle;
                    const valueRange = rightMark.value - leftMark.value;
                    const angleOnValue = angleRange / valueRange;

                    this.currentAngle = leftMark.angle + (value - leftMark.value) * angleOnValue;
                }
            }
        }
    }

    increase() {
        if (this.value < this.maxValue) {
            this.value++;
        }
    }

    decrease() {
        if (this.value > this.minValue) {
            this.value--;
        }
    }
}