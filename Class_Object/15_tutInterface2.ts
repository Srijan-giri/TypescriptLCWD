export {}

interface Employee{
    empName : string;
    empId: string;
    phone: number;
    getInfo: () => string;
}

 class Manager implements Employee{
    empId: string;
    phone: number;
    empName: string;
    
     constructor(empName:string,empId:string,phone:number)
     {
        this.empName = empName;
        this.empId = empId;
        this.phone = phone;
     }

     getInfo = ()=>{
         console.log("Getting Value from Manager");
        return `${this.empName} : ${this.empId} : ${this.phone}`;
     }

}


function getInformation(employee: Employee) {
    console.log("name : " + employee.empName);
    console.log("id : " + employee.empId);
    console.log("phone : " + employee.phone);
    console.log(employee.getInfo());
}

let ob = new Manager("Srijan Giri","12322",8282828);
getInformation(ob);
getInformation(new Manager("Asim Pal","23321",28988189));