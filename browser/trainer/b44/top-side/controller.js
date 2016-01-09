"use strict";

export default class MapController {
    constructor(map, b44) {
        this.map = map;
        this.b44 = b44;
    }

    close() {
        this.map.close();
    }
}