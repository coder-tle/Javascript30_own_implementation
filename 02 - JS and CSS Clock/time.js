var d = new Date();
console.log(d.getTime());

var tS = d/60;
var tM = d/60;
var tH = d/60;


console.log("Time in second : ",tS);
console.log("Time in minute : ",tM);
console.log("Time in hour : ", tH);
console.log(d);

console.log("Hour :", d.getUTCHours());
console.log("Minute :", d.getUTCMinutes());
console.log("Second :", d.getUTCSeconds());