//Dates

//These are some ways that the date can be printed!
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
//dont memorize this just know that something like this exists and we can change the view according to the need of the client!

//++++++++++INTERVIEW QUESTION+++++++++++
//What is the type of Date? >> Object
 console.log(typeof(myDate));

let myCreatedDate = new Date(2023,0,23)   //0=Jan, 1=Feb,......12=Jan, Indexing of Months in JS
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023,0,23,17,3,34)   // 17hrs(5pm), 3 minutes, 34 seconds 
console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Data.now()

console.log(myTimeStamp);
console.log(myCreatedData.getTime());
console.log(myCreatedData.getTime());
