"use strict";
class Employee {
    displayName() {
        console.log(`My name is ${this.name}`);
    }
}
class Manager extends Employee {
    displayNameWithTask() {
        this.displayName();
        console.log(`task is ${this.managerTask}`);
    }
}
class Devoloper extends Employee {
    displayProjectWithName() {
        this.displayName();
        console.log(`project deatil is ${this.project}`);
    }
}
let androidDevoloper = new Devoloper();
androidDevoloper.name = "Ram";
androidDevoloper.phone = "7282299";
androidDevoloper.project = "Android Social Site";
androidDevoloper.technology = "Android using Flutter";
androidDevoloper.displayName();
androidDevoloper.displayProjectWithName();
