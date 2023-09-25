
// Stack ---> LIFO (Last In Fast Out)

class Stack<T>{
    items:T[]=[];
    size:number;

    constructor(size:number){
        this.size = size;
    }

    isEmpty(){
       if(this.items.length == 0) return true;
       return false;
    }

    isFull(){
      if(this.items.length === this.size) return true;
      return false;
    }

    insert(element:T){
    if(!this.isFull())
    {
        this.items.push(element);
    }
    else{
        console.log("Stack is full");
    }
    }

     remove():T | undefined {
         if(!this.isEmpty())
         {
            return this.items.pop();
         }
         else{
            throw new Error("Stack is empty");
         }
    
    }

    display()
    {
        this.items.forEach((value)=>{
            console.log(value);
        })
    }

}

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


let s1 = new Stack<string>(2);
s1.insert("durgesh");
s1.insert("srijan");
s1.display();
console.log("removing : ");
console.log(s1.remove());
s1.display();


