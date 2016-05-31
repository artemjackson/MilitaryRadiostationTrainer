export default class RadiostartionLock {
    constructor() {
        this.isOpened = false;
    }

    toggle() {
        this.isOpened = !this.isOpened;
    }

    close() {
        this.isOpened = false;
    }

    open() {
        this.isOpened = true;
    }
}
