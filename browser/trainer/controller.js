"use strict";

export default class TrainerController{
    constructor(examiner, radiostation, resetNeeded, mode){
        if(resetNeeded){
            examiner.reset();
            radiostation.reset();
        }

        examiner.mode = mode;
    }
}
