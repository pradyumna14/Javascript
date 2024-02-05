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

