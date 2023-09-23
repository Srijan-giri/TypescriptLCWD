"use strict";
// void : null or undefined
// means no data
// void can be used when function does not return any statement
Object.defineProperty(exports, "__esModule", { value: true });
let x;
// explicit
function myFun(a, b) {
    console.log("sum is " + (a + b));
}
myFun(10, 20);
// implicit
function myFun2() {
}
// never ::: never return value
function myFun3() {
    // while(true){}
    throw new Error("This is my error");
}
// unknown ::: ---> typesafety enable , not known value , counter part of any
// but any : typesafety disable
function myFun4() {
    return "This is value";
}
let value = myFun4();
let value1 = myFun4();
// console.log(value1.toUpperCase());
// console.log(value.toUpperCase()); // error
// assertion
let valueInString = value;
console.log(valueInString.toUpperCase());
