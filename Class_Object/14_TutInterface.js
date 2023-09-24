"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInformation(employee) {
    console.log("name : " + employee.empName);
    console.log("id : " + employee.empId);
    console.log("phone : " + employee.phone);
    employee.getInfo();
}
// let emp:Employee;
// let androidDevoloper : Employee;
let ob = {
    empName: 'Durgesh',
    empId: '12342',
    phone: 242213,
    getInfo: () => {
        return "This is information from object";
    }
};
getInformation(ob);
