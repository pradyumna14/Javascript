const score = 400
console.log(score);
/*
In this case, score is declared as a primitive number.
 Primitive data types in JavaScript are immutable, meaning their values 
 cannot be changed after they are created.
 The value 400 is assigned directly to the variable score.
*/


const balance = new Number(400);
console.log(balance);

/*
Here, balance is declared as an object created using the Number constructor.
When you use the new keyword with a primitive data type constructor (like Number, String, Boolean), it creates an object wrapper around the primitive value. 
This allows you to use methods and properties that are available for objects.

However, in most cases, it's recommended to use the primitive form (first example) because
it is more efficient and straightforward. The object wrapper form (second example) is rarely used intentionally,
and it might lead to unexpected behavior when comparing values due to differences in identity.

In summary, the main difference is that the first example (const score = 400;)
declares a primitive number, while the second example (const balance = new Number(400);)
declares an object wrapper around the primitive number. Generally, it's preferable to use the primitive form unless there's a specific
reason to use the object wrapper.
*/

console.log(balance.toString().length);
console.log(balance.toFixed(2));  //limits the decimal to 2 pointers.

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(1));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++MATHS+++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-1));
console.log(Math.round(4.3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,3,2,1));
console.log(Math.max(4,3,2,1));

console.log(Math.random()); //prints different number different time starting with 0.

// i dont need a 0.  soo i multiply it with 10
console.log(Math.random()*10);

// suppose my random number was  0.035  then after *10 we would still get a 0.35 which still starts with a 0, again to avoid this we add a "1". we are generating random numbers here soo adding 1 in a random number results ina rrandom number itself soo we are good!

console.log((Math.random()*10)+1); //line 29 of chair aur code!


/*
lets say we want the random numbers to be within 10 and 20, juct like playing in ludo, to make the dice range from 1 to 6, similarly we are limiting from 10 to 20.
*/

const min = 10
const max = 20
//includes both 10 and 20.
console.log(Math.floor(Math.random()*(max-min)+min));
// >> prints: numbers between 10 to 20 including 10 and 20.





