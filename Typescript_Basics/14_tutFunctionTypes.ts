// type of function

// (parameters) => return type

export{}
let x:(a:number,b:number)=>number = function myFun(a:number,b:number):number{
    return a+b;
;

}


let person :{
    firstname:string;
    lastname:string;
    getFullName:()=>string;
};

person={
    firstname:'Durgesh',
    lastname:'Tiwari',
    getFullName:function():string{
        return this.firstname+ " "+this.lastname;
    }
}

console.log(person.getFullName());


let play : (p1 : string,p2:string)=>string;
play = function (p1:string,p2:string):string{
    return `I love ${p1} and ${p2} game`;
}

console.log(play('cricket','football'));

let profile :{
    name :string;
    age:number;
    game :(p1:string,p2:string)=>string;
}


profile = {
    name:"Amar",
    age:25,
    game:function(p1:string,p2:string):string{
        return `I love ${p1} and ${p2} game`;
    }
}

console.log(profile);
console.log(profile.game('cricket','football'));
