

export{}

class Car{
    static count:number = 0;
    constructor(){
        Car.count++;
    }
}


let ob1 = new Car();
let ob2 = new Car();
let ob3 = new Car();


console.log("Number od Objects : "+Car.count);

let ob4 = new Car();
console.log("Number od Objects : " + Car.count);