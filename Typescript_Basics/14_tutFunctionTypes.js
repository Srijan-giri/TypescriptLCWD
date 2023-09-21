"use strict";
// type of function
Object.defineProperty(exports, "__esModule", { value: true });
var x = function myFun(a, b) {
    return a + b;
    ;
};
var person;
person = {
    firstname: 'Durgesh',
    lastname: 'Tiwari',
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    }
};
console.log(person.getFullName());
var play;
play = function (p1, p2) {
    return "I love ".concat(p1, " and ").concat(p2, " game");
};
console.log(play('cricket', 'football'));
var profile;
profile = {
    name: "Amar",
    age: 25,
    game: function (p1, p2) {
        return "I love ".concat(p1, " and ").concat(p2, " game");
    }
};
console.log(profile);
console.log(profile.game('cricket', 'football'));
