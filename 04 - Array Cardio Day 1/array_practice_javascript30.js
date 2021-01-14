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

// console.log(Array.isArray(inventors));
const list1500s = inventors.filter( a=> (a.year > 1500 && a.year<1600) );
console.log(list1500s);



// Array.prototype.map()

//brute force way
let listFirstLast = [];

inventors.forEach(foo2);
function foo2(obj){
    listFirstLast.push({first : obj.first, last : obj.last});
}

console.log(listFirstLast);
console.log("\n\n\n");

// using map
let listFirstLastUsingMap = inventors.map(function foo3(inventor){
    return {first : inventor.first, second:inventor.last};
})


console.log(listFirstLastUsingMap);


// shorter way
console.log("\n\n\n");
let listFirstLastUsingMap2 = inventors.map(inventor => ({first : inventor.first, last : inventor.last}));
// Note : that return statement should be within parenthesis in case of arrow function
    
//     function foo3(inventor){
//     return {first : inventor.first, second:inventor.last};
// })
console.log(listFirstLastUsingMap);




// Array.prototype.sort()

// let inventorSortedByBirthdate = inventors.sort(compare);
// function compare(inventor1, inventor2){
//     return (inventor1.year < inventor2.year); // THIS WAS NOT WORKING BECAUSE SORT FUNCTION EXPECTS INTEGERS, BUT IT GETS BOOLEAN, 
                                                // THATS WHY IT WAS GIVING WRONG ANSWERS
// }

console.log(inventors.sort(function(inventor1, inventor2){
    return (inventor1.year - inventor2.year);
}));

console.log("\n\n\n\n");
// console.log(inventorSortedByBirthdate);

console.log(typeof inventors[0].year);

// var cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ]; 

// console.log(cars.sort(function(a,b){
//     return a.year > b.year;
// }))


// Array.prototype.reduce()
// How many years all the inventor lived ?

console.log(inventors.reduce(function(totalYears, inventor){
    return totalYears + (inventor.passed - inventor.year);
}, 0));
// value 0 represent initial value for totalYears ( accumulator)


// Sort the inventor based on the years they lived 

let inventorsLifeSpan = inventors.sort(function(inventor1, inventor2){
    return ( (inventor1.passed - inventor1.year) - (inventor2.passed - inventor2.year) );
})
console.log("\n\n\n\n");
console.log(inventorsLifeSpan);




// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. Sort exercise 
// Sort the people alphabetically by last name
console.log(typeof people);
console.log(typeof people[0]);


// 8. Reduce exercise
// Sum up the instances of each of these

