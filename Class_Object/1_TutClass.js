// class
// ob1 -> variable + Function
// Templete of Object (Blueprint)
// define fields (properties / instance variable)
// define methods (behaviour / task )
var Car = /** @class */ (function () {
    // constructor
    // is used to initialize the variables 
    function Car(m, c) {
        if (m === void 0) { m = 'default model'; }
        if (c === void 0) { c = 'default color'; }
        this.model = m;
        this.color = c;
        console.log("creating object");
    }
    //Multiple constructor implementations are not allowed.
    // constructor(){
    // }
    // methods  -> when we create a function inside class and methods are the behaviour assosiated with object
    Car.prototype.getModelNumber = function () {
        console.log("Getting Model Number");
        return this.model;
    };
    return Car;
}());
var car1 = new Car("Tata Nexon", "Black");
console.log(car1);
var modelNumber = car1.getModelNumber();
console.log(modelNumber);
console.log(car1.model);
console.log(car1.color);
// car1.color = 'White';
// car1.model = "Tata Nexon";
// console.log(car1);
// console.log(car1.model);
// console.log(car1.color);
var car2 = new Car("Tata Tiago", "Orange");
console.log(car2);
var car3 = new Car();
console.log(car3);
var car4 = new Car("Tata NEXON EV");
console.log(car4);
var car5 = new Car(undefined, "RED");
console.log(car5);
