const myArr = [0,1,2,3,4,5]

const myHeroes = ["shaktiman","hanuman"]
const myarr2 = new Array(1,2,3,4)

console.log(myArr[1]);

//++++++++METHODS IN ARRAY++++++++

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(9);  //it is like push but pushes in the last part of stack/first part of array!
myArr.shift()  //it is like pop!

console.log(myArr);

/////////////////////////////////////

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));


const newArr = myArr.join()  //join converted the array into the strings seperated by a comma.
console.log(myArr);
console.log(newArr);


////SLICE, SPLICE////

console.log("A",myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);