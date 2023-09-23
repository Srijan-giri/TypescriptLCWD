var Sum = /** @class */ (function () {
    function Sum(a, b) {
        this.a = a;
        this.b = b;
        console.log("creating object of sum");
    }
    Sum.prototype.sum = function () {
        return this.a + this.b;
    };
    return Sum;
}());
var sum1 = new Sum(12, 34);
console.log(sum1.sum());
var sum2 = new Sum(2, 5);
console.log(sum2.sum());
