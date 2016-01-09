"use strict";

export default class T121RightSidebarCtrl {
    constructor($interval, b44, weather, examiner) {
        this.interval = $interval;
        this.b44 = b44;
        this.weather = weather;
        this.examiner = examiner;

        this.oneSec = 1000;

        this.currentTime = moment().format('HH:mm:ss');

        this.interval(() => {
            this.updateCurrentTime();
        }, this.oneSec);
    }

    setWorkFinishedTime() {
        this.b44.finishedTime = moment().format('HH:mm:ss');
    }

    updateCurrentTime() {
        this.currentTime = moment().format('HH:mm:ss');
    }
}