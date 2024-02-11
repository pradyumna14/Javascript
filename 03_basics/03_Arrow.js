const user = {

username: "Pradyumna",
price: 999,

thisMessage: function(){
    console.log(`hello ${this.username}, welcome to the website`)

}
}

user.thisMessage()
user.username = "Sam";
user.thisMessage()

/*
function chai(){
    console.log(this.username);
    //..undefined,, this.username yesari only works in the Object@
}
chai()
*/


// ARROW FUNCTION+++++++

const addTwo = (num1, num2) => {
    return num1+num2
}
console.log(addTwo(3,4))
// return key word use garda, explicit return
// return keyword use nagarnu parda implicit return hunxa.
const add = (num1, num2) =>  num1+num2

console.log(add(3,4))


const add3 = (num1, num2) =>  ({username: "Pradyumna"})  // yesari object banauda ta compulsorily round bracket ko use garnu parney nai hunxa!.
console.log(add3(3,4))

