"use strict";

export  default  class WeatherService {
    constructor(){
        this.reset();
    }

    reset(){
        const minTemperature = -30;
        const maxTemperature = -1;
        this.temperature = this.randomInRange(minTemperature, maxTemperature);
    }

    randomInRange(min, max){
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }
}