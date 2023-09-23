"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(color, model) {
        this._color = color;
        this._model = model;
    }
    // getter and setter
    display() {
        console.log("color is " + this._color);
        console.log("model number is " + this._model);
        this.displayInternal();
    }
    displayInternal() {
        console.log("Display internal details");
    }
}
class childCar extends Car {
    constructor(color, model) {
        super(color, model);
    }
    // color cannot accessible
    displayChild() {
        console.log("Displaying model from child " + this._model);
    }
}
let ob = new Car("White", "TIG204");
// console.log(ob._color);
// ob._color="Black";
// console.log(ob._color);
ob.display();
//ob._model = "USH" // not accssible in outside the class
let obChild = new childCar("Black", "22342");
obChild.displayChild();
