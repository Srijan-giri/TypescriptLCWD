"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Demo {
    static myMethod() {
        console.log("Call Static method");
    }
    myStaticTest() {
        console.log(this.name);
        console.log(Demo.college);
    }
}
let ob1 = new Demo();
ob1.name = "OB1";
let ob2 = new Demo();
// ob2.college = "MSIT"  --> error 
Demo.college = "MSIT";
console.log(ob1);
console.log(Demo.college);
Demo.myMethod();
ob1.myStaticTest();
// Demo.college="IIT Kanpur";
// console.log(Demo.college);
