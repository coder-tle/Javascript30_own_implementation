// var x = 10;
// var y = 'abc';

// console.log(x,y);

// var a  = x;
// var b = y;
// console.log(a,b);


// x = x*2;
// y = y + "de";
// console.log(a,b);


// a = a*4;
// b = b + "fg";
// console.log(x,y);

// var arr = [];
// arr.push(1);
// console.log(arr);

// var arr2 = arr;
// console.log('arr = ',arr);
// console.log('arr2 = ',arr2);


// arr2.push(2);
// console.log('arr = ',arr);
// console.log('arr2 = ',arr2);

// primitive data type string, bool, numbers
// let age = 100;
// let age2 = age;

// console.log(age, age2);
// age = 200;

// console.log(age, age2);



// array - reference objects
const players = ['wes', 'sarah', 'ryan', 'popy']
const team1 = players;

// console.log(players, team1);
// team1[1] = "alam";

console.log(players, team1);


const team2 = players.splice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);
const team6 = JSON.parse(JSON.stringify(players));
players[0] = 'sarfaraz';

console.log(team2, team3, team4, team5, team6);
console.log("Sarfaraz is included",players );



console.log(team2, team3, team4, team5, team6);


console.clear();

const dev = {
    name : 'Sarfaraz',
    age : 23,
    social: {
        twitter : '@sarfaraznitj'
    }
};

const dev1 = dev;
console.log(dev1, dev);

// dev1.name = "Sarfaraz Alam";
console.log(dev1, dev);

console.clear();

const dev2 = Object.assign({}, dev);
dev.name = "Sarfaraz Alam";
console.log(dev, dev2);



const dev3 = {...dev};
console.log(dev3);

dev3.social.twitter = '@nitj';

console.log(dev);