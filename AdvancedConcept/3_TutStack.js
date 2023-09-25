// Stack ---> LIFO (Last In Fast Out)
var Stack = /** @class */ (function () {
    function Stack(size) {
        this.items = [];
        this.size = size;
    }
    Stack.prototype.isEmpty = function () {
        if (this.items.length == 0)
            return true;
        return false;
    };
    Stack.prototype.isFull = function () {
        if (this.items.length === this.size)
            return true;
        return false;
    };
    Stack.prototype.insert = function (element) {
        if (!this.isFull()) {
            this.items.push(element);
        }
        else {
            console.log("Stack is full");
        }
    };
    Stack.prototype.remove = function () {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
        else {
            throw new Error("Stack is empty");
        }
    };
    Stack.prototype.display = function () {
        this.items.forEach(function (value) {
            console.log(value);
        });
    };
    return Stack;
}());
// let stack = new Stack<number>(4);
// stack.insert(23);
// stack.insert(12);
// stack.insert(20);
// stack.insert(324);
// stack.display();
// console.log("removing : ")
// console.log(stack.remove());
// stack.display();
// console.log(stack.isEmpty());
// console.log(stack.isFull());
var s1 = new Stack(2);
s1.insert("durgesh");
s1.insert("srijan");
s1.display();
console.log("removing : ");
console.log(s1.remove());
s1.display();
