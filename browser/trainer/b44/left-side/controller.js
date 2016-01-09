"use strict";

export default class LeftSideController {
    constructor(leftSide, b44, examiner) {
        this.examiner = examiner;
        this.leftSide = leftSide;
        this.b44 = b44;
    }

    close() {
        this.leftSide.close();
    }

    increase() {
        if (this.b44.correction < 5)
            this.b44.correction++;
    }

    decrease() {
        if (this.b44.correction > -5)
            this.b44.correction--;
    }

    togglePath(){
        this.b44.path = this.b44.path === "ВЫКЛ" ? "ВКЛ" : "ВЫКЛ";
    }
}