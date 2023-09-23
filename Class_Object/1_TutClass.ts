// class
// ob1 -> variable + Function

// Templete of Object (Blueprint)
// define fields (properties / instance variable)
// define methods (behaviour / task )


class Car{

    // properties / variables

    // model: string ='Tata Tiago' ;
    // color: string ='Balck'; 
    

    model!: string ;
    color!: string ; 


    // constructor
    
    // is used to initialize the variables 
    constructor(m:string = 'default model',c:string = 'default color'){
        this.model = m;
        this.color = c;
        console.log("creating object")
    }

    //Multiple constructor implementations are not allowed.
    // constructor(){

    // }
    

    // methods  -> when we create a function inside class and methods are the behaviour assosiated with object

    getModelNumber():string{
        console.log("Getting Model Number");
        return this.model;
    }

}


let car1:Car = new Car("Tata Nexon","Black");
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


let car2 : Car = new Car("Tata Tiago","Orange");
console.log(car2);

let car3 : Car = new Car();
console.log(car3);

let car4 : Car = new Car("Tata NEXON EV");
console.log(car4);

let car5: Car = new Car(undefined , "RED");
console.log(car5);












