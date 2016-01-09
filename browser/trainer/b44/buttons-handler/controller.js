"use strict";

export default class B44ButtonsHandlerController {
    constructor(b44) {
        this.b44 = b44;
    }

    increase(value, event) {
        event.preventDefault();
        event.stopPropagation();

        let currentValueString = String(this.b44.counters[this.property]);
        const decimalIndex = currentValueString.length - String(value).length;

        if (currentValueString[decimalIndex] === "9") {
            currentValueString = currentValueString.substr(0, decimalIndex) + "0" + currentValueString.substr(decimalIndex + 1);
            this.b44.counters[this.property] = parseInt(currentValueString);
        } else {
            this.b44.counters[this.property] += value;
        }
    }
}