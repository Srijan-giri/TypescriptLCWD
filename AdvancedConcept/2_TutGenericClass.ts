export{}

class MyProgram<T>{
    user:T;
    displayDetail(){
        console.log(this.user);
        console.log(typeof this.user)
    }
}

interface User{
    name:string;
    email:string;
    phone:string;
} 

let ob:MyProgram<string> =new MyProgram();
ob.user = "durgesh kumar tiwari";
ob.displayDetail();


let ob1 = new MyProgram<User>();
ob1.user = {
    name : "durgesh tiwary",
    email:"abc@gmail.com",
    phone:"1234567890"
};

ob1.displayDetail();

