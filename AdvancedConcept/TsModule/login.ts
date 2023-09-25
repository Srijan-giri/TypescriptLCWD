
// Ram

// export{} -- > local scope 
// otherwise those are global scope

let userEmail : string ="this is login field : email" ;

function validate(){
    console.log("Validating login details");
}

export let userPassword : string = "This is password";

class Test{

}

export default function wow(){
    console.log("wow of login");
}

export{userEmail,validate,Test};