"use strict";

import topSideCtrl from "./controller";

export default class topSideService {
    constructor($mdDialog) {
        this.dialog = $mdDialog;
    }

    show($event) {
        this.dialog.show({
            targetEvent: $event,
            clickOutsideToClose: true,
            template: require('./template.html'),
            controller: topSideCtrl,
            controllerAs: 'ctrl'
        });
    }

    close() {
        this.dialog.cancel();
    }
}