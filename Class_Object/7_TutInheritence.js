"use strict";
// Inheritence
class Parent {
    constructor() {
        this.name = "parent name";
    }
    displayName() {
        console.log(`name is ${this.name}`);
    }
}
class Child extends Parent {
    constructor() {
        super(...arguments);
        // name:string = "Child name";
        this.city = "Lucknow";
    }
    displayCity() {
        console.log(`city is ${this.city}`);
    }
}
let child = new Child();
console.log(child.name);
child.displayName();
console.log(child.city);
child.displayCity();
