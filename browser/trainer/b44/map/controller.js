"use strict";

export default class MapController {
    constructor(map) {
        this.map = map;
    }

    close() {
        this.map.close();
    }
}