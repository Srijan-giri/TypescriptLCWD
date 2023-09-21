
export {}

// those are falsy 
// null
// undefined
// 0
// ''
// false


// null

// null is falsy value.


let userName = null;
console.log(userName);
console.log(typeof userName);


// undefined
// Undefined is falsy value.

let userPassword : undefined;
console.log(userPassword);
console.log(typeof userPassword);

if(userName)
{
    console.log("User name is present")
}
else{
    console.log("User name is not present")
}

if(userPassword)
{
    console.log("True Password");
}
else{
    console.log("False Password");
}


// any --> avoid using Any type in your code

let networkData:any ='This is data';
console.log(networkData); 

networkData = {
   productName : "Samsung Tv",
   price : 32144,
   discountedPrice : 2354,
}

console.log(networkData.productName);
console.log(networkData.isActive);