"use strict";

/*  Global ipc  */

export default class MenuCtrl {
    constructor(){
    }

    exit(){
        ipc.send("close-main-window");
    }
}