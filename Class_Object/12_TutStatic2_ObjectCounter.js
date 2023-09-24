"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor() {
        Car.count++;
    }
}
Car.count = 0;
let ob1 = new Car();
let ob2 = new Car();
let ob3 = new Car();
console.log("Number od Objects : " + Car.count);
let ob4 = new Car();
console.log("Number od Objects : " + Car.count);
