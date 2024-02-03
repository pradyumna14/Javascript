/*
<
==
>=
<=

these are all same, these are best to do 
when both the comparisions waley are of same data types
*/

console.log("2"==2);

//this automatically changes the string to number data type and checks.
/*
but when different data types like:
console.log(null>0);
null==0
null>=0 then what? 
same problem is with console.log(undefined>=0);, etc, etc

===
is a strict comparion operator,
it not only compares 2 elements but also compares their data types...
*/
// console.log("p"==="p");   //>> true