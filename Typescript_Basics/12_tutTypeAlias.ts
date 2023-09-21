// Type Alias 
// it is used to give a name of a type in typescript

export{}
type xyz=string; // type aliasing
let address : xyz = "Mumbai";
console.log(typeof address);


type alphaNum = (string|number);

let password : alphaNum ;

password="ABC#@^23234";

password=23463213;

console.log(password);
console.log(typeof password);


// type :: object type
type order = {
    title : string,
    price: number,
    status :string
};

let order1 : order ;

order1={
    title : "Samsung TV",
    price : 45000,
    status : "This is status"
};

console.log(order1);
