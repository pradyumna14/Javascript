const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["Superman","flash", "batman"]

// marvel_heros.push(dc_heros); // .push ko thau mah .concat garda ni answer would be the same. both mean the same!
// console.log(marvel_heros);  // question is will these merge??
// // >> [ 'thor', 'ironman', 'spiderman', [ 'Superman', 'flash', 'batman' ] ] , soo 4th element is iself all the DC heros, and 4th element ko bhitra aru element xah..
// // you can access those elements performing the code given below::

// console.log(marvel_heros[3][1]);


// // lets add all heros in the same array

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);
//OR an alternative can be:
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);
//BOTH OUTPUT'S IS SAME >> [ 'thor', 'ironman', 'spiderman', 'Superman', 'flash', 'batman' ]

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// flat function write the whole subsets of array under a single array, it desolves all the sub arrays basically!
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Array.isArray("Pradyumna"))//>> No its not an array cause its a string soo it will print "False"
console.log(Array.from("Pradyumna")) //>> it will convert the given data to an Array!

console.log(Array.from({name: "Pradyumna"}));
//>> [] ..... {name:"Pradyumna"} it is an object which is not iterable soo just [] is shown.., strings, arrays are iterable!

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

//>> of function takes the set of data and combines under an array!

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++