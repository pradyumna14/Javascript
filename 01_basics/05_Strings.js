const name = "Pradyumna"
const repoCount = 50

console.log("Hello my name is "+ name + " and my repo count is " + repoCount);
// this is not a good practise to be done!!!

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// this is a good practice

// HOW TO DECLARE A STRING
// way 1 
console.log(typeof("hello"));
//way 2
const gameName = new String('Pradyumna');
console.log(gameName[0]);

console.log(gameName.__proto__);   //replace proto with various object names like lenght, touppercase, etc

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('d'));


const newString = gameName.substring(0,4);  //4th order is not included, only 0,1,2,3 order are included.
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newString2 = "   Pradyumna     "   //we dont need the spaces, soo we use the Trim method!
console.log(newString2);
console.log(newString2.trim());

//I want to make some changes in the url.
const url = "https://pradyumna.com/pradyumna%20kattel";
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));   //'includes' checks if the given data contains the element of not
console.log(url.includes('kattel'));

const Krishav = "pradyumna-sharma-kattel"
console.log(Krishav.split("-"));  //split() splitted the given string on the basis of '-' (in this case) to an array, we can split on the basis of anything, be it space or any other symbol.

// Revisit and recall all the methods of string! 