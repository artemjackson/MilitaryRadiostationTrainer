"use strict";

export default class TrainerController{
    constructor(examiner, t121, b44, weather, resetNeeded, mode){
        if(resetNeeded){
            examiner.reset();
            t121.reset();
            b44.reset();
            weather.reset();
        }

        examiner.mode = mode;
    }
}