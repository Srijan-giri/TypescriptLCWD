// optional parameters : 
//  1) Required Parameters : must
//   2) Optional Parameters : may or may not
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// here C is optional
// let x = function sumOfThree(a:number,b:number,c?:number,d?:number):number{
//     console.log("Adding three numbers");
//     if(c!== undefined)
//     {
//         return a+b+c;
//     }
//     return a+b;
// }
// console.log(x(23,45,67));
// console.log(x(23,45));
// default parameter
// let x = function sumOfThree(a: number, b: number, d: number = 1): number {
//     console.log("Adding three numbers");
//     return a + b + d;
// }
// console.log(x(1, 2, 3));
// console.log(x(1, 2));
// let y = function sum(a: number = 1, b: number, c: number = 1) {
//     console.log(a);
//     return a + b + c;
// }
// console.log(y(undefined, 2));
// rest parameters
function sumAtLeastTwo(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var sum = a + b;
    rest.forEach(function (value) { return sum += value; });
    console.log(sum);
    return sum;
}
sumAtLeastTwo(12, 13);
sumAtLeastTwo(12, 13, 23, 12, 3, 5, 5, 6);
sumAtLeastTwo(1, 2, 3);
var arr = [2, 3, 4, 5];
sumAtLeastTwo.apply(void 0, __spreadArray([1, 2], arr, false));
