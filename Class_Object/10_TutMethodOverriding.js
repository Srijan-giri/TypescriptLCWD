"use strict";
// method overriding
Object.defineProperty(exports, "__esModule", { value: true });
class Parent {
    greet() {
        console.log("How are you,I am parent");
    }
}
class Child extends Parent {
    // method overriding
    greet() {
        console.warn("I am child , how are you");
    }
}
let ob = new Child();
ob.greet(); // it calls child greet method
// ob.greet('message not working'); 
let p = new Parent();
p.greet(); // it calls parent greet method
