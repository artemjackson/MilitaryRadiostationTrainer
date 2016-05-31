export default class FrequencyScaleCtrl {
    constructor() {
        this.percentPerValue = 100 / Math.abs(this.model.maxValue - this.model.minValue);
    }

    get scalePossition(){
        return (this.model.value - this.model.minValue) * this.percentPerValue;
    }
}
