//Immediately Invoked Function Expressions (IIFE)

(function chai(){              //named IiFI, name is chai
    console.log(`DB CONNECTED`);
})();                         //two Iifi are seperated by a semicolon! 

( (name) => {                //unnamed IiFI
console.log(`DB CONNECTED TWO ${name}`);
}) ('hitesh')                  //Arrow function to Iifi and also passing values to an Iifi!
