//Singleton: know its brief definition.

//Object.create (bata pani object banxa, its called using a constructor method and yeskai bhitra singleton banxa!)
//>> Learnt in next file


//object literal: way of declaring an object!

const mySym = Symbol("key1")

const JsUser = {
    name: "pradyumna",
    "surname" : "Sharma Kattel",
    age : 18,
    [mySym]:"mykey",
    location: "NIT Hamirpur",
    email: "pradyumnakattel14@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Lets access the object now! using the correct syntax
// also lets use symbol inside an object, its important in the interview point of view.

console.log(JsUser["email"]);
console.log(JsUser["surname"]);
console.log(JsUser[mySym]);

JsUser.email = "23bcs131@nith.ac.in"  
 //>> we can just overwrite the values: email is now changed!

 //++++
// but i dont want to make any edits on my object, soo i can freeze it by doing the following:
//Object.freeze(JsUser)
JsUser.email = "hello@gmail.com"
console.log(JsUser["email"]);
//>> 23bcs131@nith.ac.in is my output as hello@gmail.com was not updated as i had frooze the object hehe!

//++++++++++++++++++++++++++++++++++++++++++++++++++++++

JsUser.greeting = function(){
    console.log("Namaste User");
}
JsUser.greetingTwo = function (){
    console.log(`Namaste ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


console.log(JsUser.greeting);


// Understood!!