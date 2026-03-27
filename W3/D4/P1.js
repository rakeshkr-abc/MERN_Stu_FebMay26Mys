// Array basics
console.log("Array basics");
//Creating arrays
let emptyArray = [];
let numArray = [1,2,3,4];
let mixedArray = [42,"hello", true, null,
    {name: "Gola"}, [5,6]];
console.log(mixedArray);
console.log(numArray);
console.log(emptyArray);

//Using constructor
let fruits = new Array("Apple","Mango");
// console.log(fruits);
console.log("Is fruits an array?",
    Array.isArray(fruits));

// Push : add
fruits.push("cherry");
// console.log(fruits);

//pop : remove
fruits.pop();

//unshift: adds to beginning
fruits.unshift("Orange");
// console.log(fruits);

//shift: remove from beginning
fruits.shift();
console.log(fruits);