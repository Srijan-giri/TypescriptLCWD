

// incomplete
abstract class Animal{
   
    abstract name : string;
    abstract eat():string;

    display(){
        console.log("this is display method in abstract class");
    }

}

class Dog extends Animal{
    name:string;
    eat(): string {
        return "Dog is eating";
    }
    
}

let dog = new Dog();
dog.name="Buzo";
console.log(dog.eat());
dog.display();
console.log(dog.name);

