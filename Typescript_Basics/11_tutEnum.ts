
// Enum : Group of named constant values

// name of days

// syntax :

enum DAYS {
    MON,
    TUE,
    WED,
    THU,
    FRI,
    SAT,
    SUN
};

enum MONTHS {
    JAN,
    FEB,
    MAR,
    APR,
    MAY,
    JUN,
    JUL,
    AUG,
    SEP,
    OCT,
    NOV,
    DEC,
};

console.log(MONTHS.JAN);




function myFun(value: MONTHS) {

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



enum orderStatus {
    PENDING,
    DELIVERED,
    DISPATCH
}


let order: { title: string, price: number, status: orderStatus, date: Date };

order = {
    title: "Samsung TV1234",
    price: 33000.86,
    status: orderStatus.PENDING,
    date: new Date(),
}

console.log(order);
order.status = orderStatus.DELIVERED;
console.log(order);

console.log(orderStatus);