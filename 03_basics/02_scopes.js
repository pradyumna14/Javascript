// if(true){
//     let a = 10
//     const b = 20
//     var c = 30    
// }

// // console.log(a);
// // console.log(b);
// console.log(c);    // we see that var is not a scope


// let x = 300;
// if (true){
// let x = 10;
// console.log("Inner x: ", x)
// }

// console.log(x);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//NESTED SCOPE

function one(){
const username = "Pradyumna"

function two(){
    const website = "Youtube"
    console.log(username);
}
//console.log(website);

two()
}

one()



if (true){
    const username = "kattel"
    if(username === "kattel"){
        const website = "youtube"
        console.log(username + website)
    }
    // console.log(website);
}
// console.log(username);

//++++++++++++++++++++++INTERESTING+++++++++++++

//there are 2 ways to declare a function!

//addone(5)... mathi call garda ni hunxa main function ko, in this way of function declaration..
/*1*/ function addone(num) {
return num + 1
}
addone(5)

/*2*/ addTwo(5)// Mathi call garda mandaina, (error dekhauxa)yo way of function declaration mah...
const addTwo = function(num){
    return num +2
}

addTwo(5)