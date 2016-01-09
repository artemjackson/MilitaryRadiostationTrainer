"use strict";

export default class B44Controller {
    constructor(b44, examiner, map, topSide, leftSide) {
        this.examiner = examiner;
        this.b44 = b44;
        this.map = map;
        this.topSide = topSide;
        this.leftSide = leftSide;
        this.step = 10;
        this.interval = 80;
    }

    showMap() {
        this.map.show();
    }

    showTopSide(){
        this.topSide.show();
    }

    showLeftSide(){
        this.leftSide.show();
    }

    increaseX() {
        if (this.b44.pencil.x.value < this.b44.pencil.x.maxValue) {
            this.b44.pencil.x.value += this.step;
            this.b44.counters.x += this.step;
        }
    }

    decreaseX() {
        if (this.b44.pencil.x.value > this.b44.pencil.x.minValue) {
            this.b44.pencil.x.value -= this.step;
            this.b44.counters.x -= this.step;
        }
    }

    increaseY() {
        if (this.b44.pencil.y.value < this.b44.pencil.y.maxValue) {
            this.b44.pencil.y.value += this.step;
            this.b44.counters.y += this.step;
        }
    }

    decreaseY() {
        if (this.b44.pencil.y.value > this.b44.pencil.y.minValue) {
            this.b44.pencil.y.value -= this.step;
            this.b44.counters.y -= this.step;
        }
    }
}
