"use strict";

export default class radiostationRightSidebarCtrl {
    constructor($interval, radiostation, examiner) {
        this.interval = $interval;
        this.radiostation = radiostation;
        this.examiner = examiner;

        this.oneSec = 1000;

        this.currentTime = moment().format('HH:mm:ss');

        this.interval(() => {
            this.updateCurrentTime();
        }, this.oneSec);
    }

    updateCurrentTime() {
        this.currentTime = moment().format('HH:mm:ss');
    }
}
