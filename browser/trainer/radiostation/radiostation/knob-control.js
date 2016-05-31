"use strict";

export default class KnobControl {
    constructor(config) {
        this.id = (Math.random() * 1000000).toFixed().toString();
        this.closured = config.closured;
        this.marks = config.marks;
        this.rotationSpeed = config.rotationSpeed;

        this.minValue = this.marks[0].value;
        this.maxValue = this.marks[this.marks.length - 1].value;

        this.step = config.step || 1;

        if(config.initialValue  === "random") {
            this.value = randomInRange(this.minValue, this.maxValue, this.step);
        } else {
            this.value = config.initialValue || 0;
        }
    }

    get value() {
        return Number(this._value);
    }

    get alias() {
        const current = this.marks.find(el => el.value === parseInt(this.value));
        return current.alias;
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
            this.value += this.step;
        } else if (this.closured) {
            this.value = this.minValue;
        }
        return this.value;
    }

    decrease() {
        if (this.value > this.minValue) {
            this.value -= this.step;
        } else if (this.closured) {
            this.value = this.maxValue;
        }
        return this.value;
    }
}

function randomInRange(min, max, multiplicity = 1){
    const rand = Math.floor(Math.random() * (max + 1 - min) + min);
    return rand - rand % multiplicity;
}
