"use strict";
// type of function
Object.defineProperty(exports, "__esModule", { value: true });
let x = function myFun(a, b) {
    return a + b;
    ;
};
let person;
person = {
    firstname: 'Durgesh',
    lastname: 'Tiwari',
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    }
};
console.log(person.getFullName());
let play;
play = function (p1, p2) {
    return `I love ${p1} and ${p2} game`;
};
console.log(play('cricket', 'football'));
let profile;
profile = {
    name: "Amar",
    age: 25,
    game: function (p1, p2) {
        return `I love ${p1} and ${p2} game`;
    }
};
console.log(profile);
console.log(profile.game('cricket', 'football'));
