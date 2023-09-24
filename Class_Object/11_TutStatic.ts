export{}

class Demo{

    // static variable --> we dont have to create object to access this variable
    // this variable is shared by all objects
    static college:string;


    // instance variable
    // copy of this variable is provided to object
    name:string;

    static myMethod(){
        console.log("Call Static method");
    }

    myStaticTest(){
        console.log(this.name);
        console.log(Demo.college);
    }
}


let ob1 = new Demo();
ob1.name= "OB1";

let ob2 = new Demo();
// ob2.college = "MSIT"  --> error 

Demo.college = "MSIT";
console.log(ob1);
console.log(Demo.college);
Demo.myMethod();

ob1.myStaticTest();


// Demo.college="IIT Kanpur";
// console.log(Demo.college);







