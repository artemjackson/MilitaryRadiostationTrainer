"use strict";

import MapController from "./controller";

export default class MapService {
    constructor($mdDialog) {
        this.dialog = $mdDialog;
    }

    show($event) {
        this.dialog.show({
            targetEvent: $event,
            clickOutsideToClose: true,
            template: require('./template.html'),
            controller: MapController,
            controllerAs: 'ctrl'
        });
    }

    close() {
        this.dialog.cancel();
    }
}