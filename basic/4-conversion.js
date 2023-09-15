console.log("Hello Devendra Vishwakarma")
let score = "40"
console.log(typeof score)
console.log(typeof(score))
let valInNumber = Number (score)
console.log(typeof valInNumber)

let num = "30abc"
console.log(typeof score)
let val = Number(num)
console.log(typeof val);
console.log(val);


let num1 = true
console.log(typeof num1)
let val1 = Number(num1)
console.log(typeof val1);
console.log(val1);


let num2 = undefined
console.log(typeof num2)
let val2 = Number(num2)
console.log(typeof val2);
console.log(val2);


let num3 = null
console.log(typeof num3)
let val3 = Number(num3)
console.log(typeof val3);
console.log(val3);

// "33" => 33
// "40abc" => NaN (Not a Number)
// true => 1 : false => 0
// null => 0 (number)
// undefined => NaN

let isLoggedIn = 1
let boolLoggedIn = Boolean(isLoggedIn)
console.log(boolLoggedIn);