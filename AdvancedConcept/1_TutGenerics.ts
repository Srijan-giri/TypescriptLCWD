export{}

// generic function

function getInfo<T>(numbers:T[]){
    console.log(typeof numbers[0]);
    console.log(numbers[1]);
}

interface MyType{
   name:string;
}

function merge<U,V>(ob1:U,ob2:V)
{
    console.log({
        ...ob1,
        ...ob2,
    });
    
}

interface MyType1{
    email:string;

}

getInfo<string>(["23","45"]);
getInfo<number>([12,234,22.45]);
getInfo<boolean>([true,false]);
getInfo<MyType>([{name:"test"},{name:'test1'}]);
merge<MyType, MyType1>({ name: "test" }, { email: 'test@gmail.com' });
