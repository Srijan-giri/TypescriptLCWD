class Student{
    readonly _college : string;

    constructor(college:string)
    {
        // college="Test";
        // college="swadsw";
        this._college = college;
    }
}

let student1 = new Student("MIT");

console.log(student1._college);

// student1._college = "IIT KGP"; // Cannot assign to '_college' because it is a read-only property.

// console.log(student1._college); //Error! 


let student2 = new Student("IIT Kanpur");
console.log(student2._college);