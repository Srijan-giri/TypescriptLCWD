export{}

class Car{
   color !:string;;
   constructor(color:string)
   {
    this.color=color;
    console.log("Creating car object");
   }

   // method

  public start(){
     console.log("Starting car");
   }

   sumTwoNumbers(a:number,b:number):number{
      console.log("Adding two number");
      return a+b;
   }
}

// creating object

let ob1 : Car = new Car("Black");
console.log(ob1);
console.log(ob1.color);
ob1.start();
let answer  = ob1.sumTwoNumbers(34,12);
console.log("Sum is : "+answer);