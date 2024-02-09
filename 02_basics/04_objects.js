// Constructive method / Singelton

// const tinderUser = new Object()  SIngelton method of declaring an object!
// const tinderUser = {}     Non Singelton method of declaring an object!

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);
//>> { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "pradyumnakattel14@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Pradyumna",
            lastname: "Kattel"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4: "b"}

const obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

const obj5 = {...obj1, ...obj2};
console.log(obj5);

const user = [
    {
    },
    {
},
{
}
]

user[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //checks if 'isLoggedIn' keyword is present or not.
console.log(tinderUser.hasOwnProperty('isLogged'));