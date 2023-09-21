// void : null or undefined
// means no data
// void can be used when function does not return any statement
var x;
// x= undefined;
// strictNullChecks is set to false in tsconfig.json : then
// x= null;
// explicit
function myFun(a, b) {
    console.log("sum is " + (a + b));
}
myFun(10, 20);
// implicit
function myFun2() {
}
// never ::: never return value
function myFun3() {
    // while(true){}
    throw new Error("This is my error");
}
// unknown ::: ---> typesafety enable
// but any : typesafety disable
function myFun4() {
    return "This is value";
}
var value = myFun4();
var value1 = myFun4();
// console.log(value1.toUpperCase());
// console.log(value.toUpperCase()); // error
// assertion
var valueInString = value;
console.log(valueInString.toUpperCase());
