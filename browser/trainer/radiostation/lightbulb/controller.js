"use strict";

export default class radiostationLightbulbCtrl {
    get opacity(){
        if(this.enabled) {
            return 1 - Math.abs(this.desired - this.actual) / 30;
        } else {
            return 0;
        }
    }
}
