"use strict";
// incomplete
class Animal {
    display() {
        console.log("this is display method in abstract class");
    }
}
class Dog extends Animal {
    eat() {
        return "Dog is eating";
    }
}
let dog = new Dog();
dog.name = "Buzo";
console.log(dog.eat());
dog.display();
console.log(dog.name);
