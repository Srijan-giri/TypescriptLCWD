"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// generic function
function getInfo(numbers) {
    console.log(typeof numbers[0]);
    console.log(numbers[1]);
}
function merge(ob1, ob2) {
    console.log(Object.assign(Object.assign({}, ob1), ob2));
}
getInfo(["23", "45"]);
getInfo([12, 234, 22.45]);
getInfo([true, false]);
getInfo([{ name: "test" }, { name: 'test1' }]);
merge({ name: "test" }, { email: 'test@gmail.com' });
