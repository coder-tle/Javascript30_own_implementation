// var array1 = ["Sarfaraz", "Alam"];
// console.log(array1);
// array1.splice(1, 0, "Chand", "babu", "born", "in", "bihar");
// console.log(array1);
// // console.log(str.splice(0, 0, "chand", "babu"));
// array1.splice(-4, 3);
// console.log(array1);

var secretCode = [8, 9, 10];
var pressed = [1, 2,3, 4,5 ,6, 7, 8, 9, 10];

pressed.splice(-secretCode.length-1, pressed.length - secretCode.length);

console.log(pressed);