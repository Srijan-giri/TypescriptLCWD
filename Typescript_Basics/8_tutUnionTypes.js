"use strict";
// Store userID
let userId = "q73jdsuqeejeu";
// console.log(userId);
userId = 14;
userId = "abahhshs";
userId = 2342511;
// userId = true ;
function displayUserId(userId) {
    console.log("user id is " + userId);
    if (typeof userId === 'string') {
        console.log(userId.toUpperCase);
    }
    if (typeof userId === 'number') {
        console.log(userId.toPrecision(5));
    }
    return userId;
}
displayUserId(userId);
let myArr = ["one", 1, "two", 2, true, null];
console.log(myArr);
