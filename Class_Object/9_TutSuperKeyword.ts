
export{}

class Employee{
   name:string;
   empId:string;

   constructor(name:string,empId:string)
   {
    this.name=name;
    this.empId=empId;
    console.log("Parent Constructor");
   }

   displayDetails()
   {
    console.log(`name : ${this.name},empId : ${this.empId}`);
   }
}

class Manager extends Employee{
    task : string;
  //  name:string = "new name";
    constructor(name:string,empId:string,task:string)
    {
        super(name,empId);
        this.task=task;
        console.log("Child Constructor");
    }


    displayAllData(): void {
        this.displayDetails();
        console.log("Task is : "+this.task);
        // console.log(this.name); // child name print
       // console.log(super.name); // parent name

        
    }


}

let emp =new Manager("Harsh","2334223","Teaching Java");

emp.displayAllData();
