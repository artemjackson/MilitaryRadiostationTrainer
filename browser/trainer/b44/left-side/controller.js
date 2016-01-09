"use strict";

export default class TopSideController {
    constructor(topSide, b44) {
        this.topSide = topSide;
        this.b44 = b44;
    }

    close() {
        this.topSide.close();
    }
}