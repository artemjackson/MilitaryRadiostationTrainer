"use strict";

export default class T121Controller {
    constructor(t121, examiner, mode, resetNeeded) {
        this.t121 = t121;
        this.examiner = examiner;

        if (resetNeeded) {
            this.t121.reset();
            this.examiner.reset();
        }

        this.examiner.mode = mode;
    }
}