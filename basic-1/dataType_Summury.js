//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// bhale hi dono mesame valeu assigne kari he lekin dono ki value alag alag hogi 
console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions
// non primitive dataType Ka typeof se type pata karne par function milta hai

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
// curly Bracket keander object likhe hote hai

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// primitive data are creat in STACK memory While non-primitive are creat in Heap memory
// In stack  => Pass By Value
// In HEAP   => Pass By Referance
