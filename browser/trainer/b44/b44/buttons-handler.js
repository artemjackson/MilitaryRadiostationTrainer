"use strict";

export default class B44ButtonsHandler {
    constructor(){
        this.isOpened = false;
    }

    toggle(){
        this.isOpened = !this.isOpened;
    }

    open(){
        this.isOpened = true;
    }

    close(){
        this.isOpened = false;
    }
}