"use strict";
// class
// ob1 -> variable + Function
// Templete of Object (Blueprint)
// define fields (properties / instance variable)
// define methods (behaviour / task )
class Car {
    // constructor
    // is used to initialize the variables 
    constructor(m = 'default model', c = 'default color') {
        this.model = m;
        this.color = c;
        console.log("creating object");
    }
    //Multiple constructor implementations are not allowed.
    // constructor(){
    // }
    // methods  -> when we create a function inside class and methods are the behaviour assosiated with object
    getModelNumber() {
        console.log("Getting Model Number");
        return this.model;
    }
}
let car1 = new Car("Tata Nexon", "Black");
console.log(car1);
let modelNumber = car1.getModelNumber();
console.log(modelNumber);
console.log(car1.model);
console.log(car1.color);
// car1.color = 'White';
// car1.model = "Tata Nexon";
// console.log(car1);
// console.log(car1.model);
// console.log(car1.color);
let car2 = new Car("Tata Tiago", "Orange");
console.log(car2);
let car3 = new Car();
console.log(car3);
let car4 = new Car("Tata NEXON EV");
console.log(car4);
let car5 = new Car(undefined, "RED");
console.log(car5);
