// Inheritence

class Parent{
    
    name:string="parent name";
    displayName(){
        console.log(`name is ${this.name}`);
    }
}

class Child extends Parent{

    // name:string = "Child name";
    city:string = "Lucknow";
    displayCity(){
        console.log(`city is ${this.city}`)
    }
}


let child = new Child();
console.log(child.name);
child.displayName();
console.log(child.city);
child.displayCity();