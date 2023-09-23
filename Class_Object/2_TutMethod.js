"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    ;
    constructor(color) {
        this.color = color;
        console.log("Creating car object");
    }
    // method
    start() {
        console.log("Starting car");
    }
    sumTwoNumbers(a, b) {
        console.log("Adding two number");
        return a + b;
    }
}
// creating object
let ob1 = new Car("Black");
console.log(ob1);
console.log(ob1.color);
ob1.start();
let answer = ob1.sumTwoNumbers(34, 12);
console.log("Sum is : " + answer);
