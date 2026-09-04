// --------- Primitive Datatype   -----------

//  7 type : String, Number, Boolearn, null, undefined, symbol, BigInt:

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId= Symbol('123')

console.log(id === anotherId);

// const bigNumber = 23344446625252635n

// --------- Reference (Non primitive Datatype)------>

//  3 Type: Array, objects, Functions ?

const heros = ["ayushman", "rahulmam", "pinkuman"];
let myobj ={
    Name: "ayush",
    age: 22,
};

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof heros);