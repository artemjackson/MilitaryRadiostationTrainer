"use strict";

export default class T121RightSidebarCtrl {
    constructor($interval, t121, weather, examiner) {
        this.interval = $interval;
        this.t121 = t121;
        this.weather = weather;
        this.examiner = examiner;

        this.formularyValues = this.t121.formularyValues;

        this.oneSec = 1000;

        this.currentTime = moment().format('HH:mm:ss');

        this.interval(() => {
            this.updateCurrentTime();
        }, this.oneSec);
    }

    updateCurrentTime() {
        this.currentTime = moment().format('HH:mm:ss');
    }

    setGyroscopeEnabledTime() {
        this.t121.toggles.gyroscope.enabledTime = this.currentTime;
    }

    resetGyroscopeEnabledTime(){
        this.t121.toggles.gyroscope.enabledTime = null;
    }
}