
export{}
class Employee{
    name : string;
    email:string;
}

class Manager extends Employee{

}

class AndroidDevoloper extends Employee{}

class Animal{}

class Test<T extends Employee>{
    ob:T;
    wow(){
        console.log(this.ob);
    }
}


function getInformation<T extends Employee>(ob:T){
  console.log(ob);
}

getInformation(new Employee());
getInformation(new Manager());
getInformation(new AndroidDevoloper());
// getInformation(new Animal());


