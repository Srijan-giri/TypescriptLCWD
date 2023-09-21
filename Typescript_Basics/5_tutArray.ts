// Array - ordered list of data

// syntax : 
// let arrayName : type[];

let numbers : number[];
numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);

// accessing array elements

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

numbers[4]=34;
console.log(numbers);
console.log(numbers[4]);


// sum of array
let sum = numbers.reduce((acc,num)=>acc+num);
// let sum = numbers.reduce((acc, num) => { return acc + num });
console.log(sum);

let names : Array<string>;
names = ['John','Sam','Raj','Ram'];
console.log(names);



let friends : Array<string>;
friends = ["Gautam","Ashutosh","Kavish"];
console.log(friends);



// array methods

// length
console.log(numbers.length);

for(let i =0 ;i<numbers.length;i++)
{
    console.log(numbers[i]);
}

// push
let newLenth : number = friends.push("Shivam");
console.log("Array Number Length : "+newLenth);
console.log(friends);


console.log(typeof numbers); // object
console.log(typeof numbers[0]); // number
console.log(typeof friends[0]);  // string


// join

console.log(friends.join("---"));

// foreach

console.log("For Each : ");

friends.forEach((value,index)=> {
    console.log(index+" : "+value.toUpperCase());
})

// map

let newFriends = friends.map((value,index)=>{
    console.log(value);
    return value.toLowerCase();
})

console.log(newFriends);


// let mixed : (Array<string|number>);
let mixed: (string|number)[];

mixed=["one","two","three",13.5,26.5,34.67,41.23];
mixed.forEach((value)=>
{
    if(typeof value === 'string')
    {
        console.log(value.toUpperCase());
    }
    else
    {
        console.log(value.toFixed()+" : "+value.toPrecision(4));
    }
})
console.log(mixed);


