"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyProgram {
    displayDetail() {
        console.log(this.user);
        console.log(typeof this.user);
    }
}
let ob = new MyProgram();
ob.user = "durgesh kumar tiwari";
ob.displayDetail();
let ob1 = new MyProgram();
ob1.user = {
    name: "durgesh tiwary",
    email: "abc@gmail.com",
    phone: "1234567890"
};
ob1.displayDetail();
