export { }

class Sum {
    private _a: number;
    private _b: number;

    constructor(a: number, b: number) {
        if (this._a < 0 || this._b < 0) {
            console.log("Negative values not allowd !!");
            throw new Error("Error in creating object : No Negative values allowed");
            // return;
        }
        this._a = a;
        this._b = b;
        console.log("Creating object of sum");
    }

    // setter

    set a(a: number) {
        console.log("Setter a");
        if (this._a < 0) {
            console.log("only positive values are allowed !!");
            return;
        }
        this._a = a;
    }

    set b(b: number) {
        console.log("Setter b");
        if (this._b < 0) {
            console.log("only positive values are allowed !!");
            return;
        }
        this._b = b;
    }

    // getter

    get getA():number{
        //any validation
        console.log("Getter a && validating a");
        return this._a;
    }

    get getB():number{
        //any validation
        console.log("Getter b && && validating b");
        return this._b;
    }

    sum(): number {
        return this._a + this._b;
    }

    display(): void {
        console.log("value of a : " + this._a);
        console.log("value of b : " + this._b);
    }
}


let ob: Sum = new Sum(12, 20);
console.log(ob);
ob.display();
console.log(ob.sum());

// let ob1 = new Sum(-12,-20);
// console.log(ob1);
// ob1.display();
// console.log(ob1.sum());

// setter
ob.display();
ob.a = -100;
ob.display();

ob.a=20;
ob.b=30

ob.display();
console.log(ob.sum())
