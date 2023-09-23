"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(name, empId) {
        this.name = name;
        this.empId = empId;
        console.log("Parent Constructor");
    }
    displayDetails() {
        console.log(`name : ${this.name},empId : ${this.empId}`);
    }
}
class Manager extends Employee {
    //  name:string = "new name";
    constructor(name, empId, task) {
        super(name, empId);
        this.task = task;
        console.log("Child Constructor");
    }
    displayAllData() {
        this.displayDetails();
        console.log("Task is : " + this.task);
        // console.log(this.name); // child name print
        // console.log(super.name); // parent name
    }
}
let emp = new Manager("Harsh", "2334223", "Teaching Java");
emp.displayAllData();
