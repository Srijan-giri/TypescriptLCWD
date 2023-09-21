// Enum : Group of named constant values
// name of days
// syntax :
var DAYS;
(function (DAYS) {
    DAYS[DAYS["MON"] = 0] = "MON";
    DAYS[DAYS["TUE"] = 1] = "TUE";
    DAYS[DAYS["WED"] = 2] = "WED";
    DAYS[DAYS["THU"] = 3] = "THU";
    DAYS[DAYS["FRI"] = 4] = "FRI";
    DAYS[DAYS["SAT"] = 5] = "SAT";
    DAYS[DAYS["SUN"] = 6] = "SUN";
})(DAYS || (DAYS = {}));
;
var MONTHS;
(function (MONTHS) {
    MONTHS[MONTHS["JAN"] = 0] = "JAN";
    MONTHS[MONTHS["FEB"] = 1] = "FEB";
    MONTHS[MONTHS["MAR"] = 2] = "MAR";
    MONTHS[MONTHS["APR"] = 3] = "APR";
    MONTHS[MONTHS["MAY"] = 4] = "MAY";
    MONTHS[MONTHS["JUN"] = 5] = "JUN";
    MONTHS[MONTHS["JUL"] = 6] = "JUL";
    MONTHS[MONTHS["AUG"] = 7] = "AUG";
    MONTHS[MONTHS["SEP"] = 8] = "SEP";
    MONTHS[MONTHS["OCT"] = 9] = "OCT";
    MONTHS[MONTHS["NOV"] = 10] = "NOV";
    MONTHS[MONTHS["DEC"] = 11] = "DEC";
})(MONTHS || (MONTHS = {}));
;
console.log(MONTHS.JAN);
function myFun(value) {
    switch (value) {
        case MONTHS.JAN:
            console.log("This is first month of the year");
            break;
        case MONTHS.FEB:
            console.log("This is second month of the year");
            break;
        default:
            console.log("Not valid Month");
    }
}
myFun(MONTHS.FEB);
myFun(MONTHS.DEC);
var orderStatus;
(function (orderStatus) {
    orderStatus[orderStatus["PENDING"] = 0] = "PENDING";
    orderStatus[orderStatus["DELIVERED"] = 1] = "DELIVERED";
    orderStatus[orderStatus["DISPATCH"] = 2] = "DISPATCH";
})(orderStatus || (orderStatus = {}));
var order;
order = {
    title: "Samsung TV1234",
    price: 33000.86,
    status: orderStatus.PENDING,
    date: new Date(),
};
console.log(order);
order.status = orderStatus.DELIVERED;
console.log(order);
console.log(orderStatus);
