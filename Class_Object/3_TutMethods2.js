"use strict";
class Sum {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        console.log("creating object of sum");
    }
    sum() {
        return this.a + this.b;
    }
}
let sum1 = new Sum(12, 34);
console.log(sum1.sum());
let sum2 = new Sum(2, 5);
console.log(sum2.sum());
