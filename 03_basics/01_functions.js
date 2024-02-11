function addTwoNumbers(number1, number2){
    return number1 + number2;
}
const result = addTwoNumbers(3,5)
console.log("Result: ", result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }

// this if wala block of code can also be written as the following:
if (!username)
    return `${username} just logged in`
}

console.log(loginUserMessage("Pradyumna"))
console.log(loginUserMessage())
//>> Please enter a username
//>> undefined!


function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(200,3400,500)); 

function calculatePrice(val1, val2, ...num1){
    return num1
}
console.log(calculateVartPrix(200,400,500, 20000))

/////////////////////////
const user = {
    username : "Pradyumna",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
//OR
handleObject({
    username: "Sam",
    price: 399
})

/////////////////////////
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
//OR
console.log(returnSecondValue([200,400,500,1000]));


