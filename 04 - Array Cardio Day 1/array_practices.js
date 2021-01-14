// An array can hold many values under a single name,
// and you can access the values by referring to an index number.

// Array revision 
let animals = ['dog', 'horse', 'cow', 'cat', 'elephant'];
console.log(animals);

console.log(animals[0]);

// insert element at the end
console.log(animals.push('tiger'));

// insert the element at the front/ beginning
console.log(animals.unshift('lion'));


// removes the last element
console.log(animals.pop());

// removes the element from the front
console.log(animals.shift()); 

// Reference : https://alligator.io/js/push-pop-shift-unshift-array-methods/

let array = ['random',
 1,
  2.3,
   'crayon'];
console.log(array);




// Decalaration of array like constructor format 
// using 'new' keyword, The two examples above do exactly the same.
// There is no need to use new Array().
// For simplicity, readability and execution speed,
// use the first one (the array literal method).
// So, avoid 'new' keyword

let array1 = new Array("Dell", "G3", 99400);
console.log(array1);


console.log(typeof array1);

// Arrays are Objects

// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// But, JavaScript arrays are best described as arrays.

// Arrays use numbers to access its "elements". In this example, person[0] returns John:




// Array Elements Can Be Objects

// JavaScript variables can be objects. Arrays are special kinds of objects.

// Because of this, you can have variables of different types in the same Array.

// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:



// Arrays forEach()
// forEach() calls a provided callback function once for each element
//  in an array in ascending order. It is not invoked for index properties 
//  that have been deleted or are uninitialized. (For sparse arrays, 
//     see example below.)

// callback is invoked with three arguments:

//     the value of the element
//     the index of the element
//     the Array object being traversed

array.forEach(foo);

function foo(a){
    console.log(a);
}



// WARNING !

// Adding elements with high indexes can create undefined "holes" in an array:

array[5] = "water color";
console.log(array);





var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length;     // person.length will return 0
var y = person[0];  

// WARNING !!
// If you use named indexes, JavaScript will redefine the array to a standard object.
// After that, some array methods and properties will produce incorrect results.
// console.log(person);
console.log(person.pop()); // gives unexpected value



// The Difference Between Arrays and Objects

// In JavaScript, arrays use numbered indexes.  

// In JavaScript, objects use named indexes.

// Arrays are a special kind of objects, with numbered indexes.
// When to Use Arrays. When to use Objects.

//     JavaScript does not support associative arrays.
//     You should use objects when you want the element names to be strings (text).
//     You should use arrays when you want the element names to be numbers.



// Avoid new Array()

// There is no need to use the JavaScript's built-in array constructor new Array().

// Use [] instead.

// These two different statements both create a new empty array named points:




// The new keyword only complicates the code. It can also produce some unexpected results:
// var points = new Array(40, 100);  // Creates an array with two elements (40 and 100)

// What if I remove one of the elements?
// var points = new Array(40);  // Creates an array with 40 undefined elements !!!!! 


// How to Recognize an Array

// A common question is: How do I know if a variable is an array?

// The problem is that the JavaScript operator typeof returns "object":


// The typeof operator returns object because a JavaScript array is an object.
// Solution 1:

// To solve this problem ECMAScript 5 defines a new method Array.isArray():

var rg = 20;
console.log(Array.isArray(array1));
console.log(Array.isArray(rg));
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];


// Array.prototype.filter()

// Array.prototype.map()

// Array.prototype.sort()

// Array.prototype.reduce()

