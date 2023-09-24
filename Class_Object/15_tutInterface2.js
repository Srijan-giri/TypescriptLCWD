"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Manager {
    constructor(empName, empId, phone) {
        this.getInfo = () => {
            console.log("Getting Value from Manager");
            return `${this.empName} : ${this.empId} : ${this.phone}`;
        };
        this.empName = empName;
        this.empId = empId;
        this.phone = phone;
    }
}
function getInformation(employee) {
    console.log("name : " + employee.empName);
    console.log("id : " + employee.empId);
    console.log("phone : " + employee.phone);
    console.log(employee.getInfo());
}
let ob = new Manager("Srijan Giri", "12322", 8282828);
getInformation(ob);
getInformation(new Manager("Asim Pal", "23321", 28988189));
