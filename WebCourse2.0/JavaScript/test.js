console.log("hello")
var arr = [];
var arr2 = [1, 2, 3, 4, 5, 6];
arr[3] = 'world';
arr[2] = 'Hello';
console.log(arr);
console.log(arr2)


// var y = Math.floor(Math.random()*100);
// console.log(y);
// var x = console.readline();
// if (Math.floor(Math.random()*6) == x) {
//     console.log("Success")
// }
// var z = 10;
// if (typeof z == 'string'){
//     console.log('It\'s string');
// } else {
//     console.log('It is not a string')
// }

var regex = /is/;
var str = "Regex is usefull";
var res = str.match(regex);
console.log(res);
var reg2 = /e/g;
console.log(str.match(regex))
console.log(str.match(reg2));