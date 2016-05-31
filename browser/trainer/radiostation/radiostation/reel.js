import KnobControl from "./knob-control";

export default class Reel extends KnobControl {
    constructor(config){
        super(config);
        this.screw1 = new KnobControl(config.screw1);
        this.screw2 = new KnobControl(config.screw2);
        this.screw3 = new KnobControl(config.screw3);
        this.screw4 = new KnobControl(config.screw4);
    }
}
