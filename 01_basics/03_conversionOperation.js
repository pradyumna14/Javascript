//Convert a string to a number
//Here a string is easily converted into the number cause string ko bhitra 
//number xah, but what if "33abc" lai change garnu xah number mah?
// we will study in the next case.

let score = "33";

console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);


//case of "33abc" 
//output is a NaN "Not a Number"
//NaN is also a datatype

/*
Yes, you are correct. The value of B will be NaN (Not a Number) 
because the string "33abc" cannot be directly converted to a number using the Number() function. 
NaN is a special value in JavaScript representing "Not a Number." 
It is a result of an operation that expects a number but receives a value that 
is not a valid number. In this case, trying to convert a string that contains 
non-numeric characters to a number results in NaN. NaN is
not a bug in JavaScript; it's a specific value defined by the language to 
indicate situations where a mathematical operation or conversion to a number 
is not possible. It helps to handle cases where the result is undefined or not 
meaningful in a numeric context. It is not equal to itself (NaN !== NaN), so you can use the 
isNaN() function to check if a value is NaN
.
*/

let A = "33abc"
console.log(typeof A);

let B = Number(A);
console.log(B);

//what if x = null ?
/*
Type of x is object here, and when converted
to a number it says 0, 
*/
let x = null
console.log(typeof x);

let y = Number(x);
console.log(y);

//undefined
let f = undefined
console.log(typeof f);

let g = Number(f);
console.log(g);

//boolean
let k = true
console.log(typeof k);

let l = Number(k);
console.log(l);


// similarly we can convert in String, Boolean by Boolean(), String() similar to Number()
