"use strict";

import config from "./map.config.json";
import Coordinate from "./coordinate";
import B44ButtonsHandler from "./buttons-handler";
import Angle from "./angle";

export default class B44Service {
    constructor() {
        this.reset();
    }

    setMap() {
        this.isMapSetted = true;
    }

    reset() {
        this.angle = new Angle(this.randomInRange(0, 2000, 10));
        this.path = "ВЫКЛ";
        this.rightAngle = new Angle(this.randomInRange(0, 2000, 10));

        this.correction = this.randomInRange(-5, 5, 1);
        this.rightCorrection = this.randomInRange(-5, 5, 1);

        this.isMapSetted = false;

        this.scales = ["ВЫКЛ", "1 : 50000", "ВЫКЛ", "1 : 100000"];
        this.currentScaleIndex = 0;
        this.scale = this.scales[this.currentScaleIndex];


        const initX = this.randomInRange(config.initX.minValue, config.initX.maxValue);
        const initY = this.randomInRange(config.initY.minValue, config.initY.maxValue);
        const step = Coordinate.step;

        this.counters = {
            x: this.randomInRange(config.x.minValue, config.x.maxValue),
            path: this.randomInRange(config.x.minValue, config.x.maxValue),
            y: this.randomInRange(config.y.minValue, config.y.maxValue)
        };

        this.coordinates = {
            x: this.randomInRange(config.initX.minValue, config.initX.maxValue, step),
            y: this.randomInRange(config.initY.minValue, config.initY.maxValue, step)
        };

        this.pencil = {
            x: new Coordinate(initX, config.x),
            y: new Coordinate(initY, config.y)
        };

        this.buttonsHandlers = {
            x: new B44ButtonsHandler(),
            path: new B44ButtonsHandler(),
            y: new B44ButtonsHandler()
        };
    }

    switchScale(){
        this.currentScaleIndex = (this.currentScaleIndex + 1) % this.scales.length;
        this.scale = this.scales[this.currentScaleIndex];
    }

    randomInRange(min, max, step = 100) {
        return Math.floor((Math.random() * (max + 1 - min) + min) / step) * step;
    }
}