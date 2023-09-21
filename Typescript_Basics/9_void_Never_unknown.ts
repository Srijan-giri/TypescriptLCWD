// void : null or undefined
// means no data
// void can be used when function does not return any statement


let x: void;

// x= undefined;

// strictNullChecks is set to false in tsconfig.json : then

// x= null;

export { }

// explicit
function myFun(a: number, b: number): void {
    console.log("sum is " + (a + b));
}

myFun(10, 20);


// implicit
function myFun2() {

}


// never ::: never return value


function myFun3(): never {
    // while(true){}
    throw new Error("This is my error");
}


// unknown ::: ---> typesafety enable , not known value , counter part of any
// but any : typesafety disable

function myFun4() {
    return "This is value";
}

let value: unknown = myFun4();
let value1: any = myFun4();

// console.log(value1.toUpperCase());
// console.log(value.toUpperCase()); // error


// assertion

let valueInString = value as string;
console.log(valueInString.toUpperCase());