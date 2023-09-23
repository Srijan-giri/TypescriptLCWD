"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(color) {
        this.color = color;
        console.log("Creating car object");
    }
    ;
    // method
    Car.prototype.start = function () {
        console.log("Starting car");
    };
    Car.prototype.sumTwoNumbers = function (a, b) {
        console.log("Adding two number");
        return a + b;
    };
    return Car;
}());
// creating object
var ob1 = new Car("Black");
console.log(ob1);
console.log(ob1.color);
ob1.start();
var answer = ob1.sumTwoNumbers(34, 12);
console.log("Sum is : " + answer);
