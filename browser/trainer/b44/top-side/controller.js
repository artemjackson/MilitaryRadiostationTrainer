"use strict";

export default class TopSideController {
    constructor(topSide, b44, examiner) {
        this.examiner = examiner;
        this.topSide = topSide;
        this.b44 = b44;
    }

    close() {
        this.topSide.close();
    }
}