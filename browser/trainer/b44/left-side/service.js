"use strict";

import leftSideCtrl from "./controller";

export default class LeftSideService {
    constructor($mdDialog) {
        this.dialog = $mdDialog;
    }

    show($event) {
        this.dialog.show({
            targetEvent: $event,
            clickOutsideToClose: true,
            template: require('./template.html'),
            controller: leftSideCtrl,
            controllerAs: 'ctrl'
        });
    }

    close() {
        this.dialog.cancel();
    }
}