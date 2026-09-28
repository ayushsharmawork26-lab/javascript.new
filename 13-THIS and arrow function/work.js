// JavaScript Arrow Function — 10 Practice Tasks

// Q1. Simple Arrow Function
// Create an arrow function greet that prints "Hello Ayush".
// Solve:=>
    // const greet = () => {
    //     console.log("Hello Ayush");
    // };

    // greet();

// Output: 1> Hello Ayush

// Q2. Addition
// Create an arrow function add that takes two numbers and returns their sum.
// Solve:=>
    // const add = (a, b) => {
    //     return a + b;
    // };

    // console.log(add(10, 20));

// Output:  1> 30

// Q3. Square
// Create an arrow function square that takes a number and returns its square.
// Solve:=>
    // const square = (num) => {
    //     return num * num;
    // };

    // console.log(square(5));

// Output: 1> 25

// Q4. Even or Odd
// Create an arrow function checkEven that takes a number and returns "Even" if the number is even, otherwise "Odd".
// solve:=>
    // const checkEven = (num) => {
    //     if (num % 2 === 0) {
    //         return "Even";
    //     } else{
    //         return "Odd";
    //     }
    // };

    // console.log(checkEven(7));

// Output: 1> Odd

// Q5. Multiply
// Create an arrow function multiply that takes two parameters and returns their multiplication.
// Solve:=>
    // const multiply = (a, b) => {
    //     return a * b;
    // };

    // console.log(multiply(5, 4));

// output:  1> 20

// Q6. Find Greater Number
// Create an arrow function greater that takes two numbers and returns the greater number.
// Solve:=>
    // const greater = (a, b) => {
    //     if (a > b) {
    //         return a;
    //     } else {
    //         return b;
    //     }
    // };

    // console.log(greater(25, 15));

// output: 1> 25

// Q7. Array Sum
// Create an arrow function sumArray that takes an array of numbers and returns the total sum.
// Solve:=>
    // const sumArray = (arr) => {
    //     let sum = 0;

    //     for (let num of arr) {
    //         sum += num;
    //     }

    //     return sum;
    // };

    // console.log(sumArray([10, 20, 30, 40]));

// Output: 1> 100

// Q8. Convert to Uppercase
// Create an arrow function toUpper that takes a string and converts it to uppercase.
// Solve:=>
    // const toUpper = (str) => {
    //     return str.toUpperCase();
    // };

    // console.log(toUpper("ayush"));

// output: 1> AYUSH

// Q9. Filter Numbers
// Create an arrow function getGreaterThan10 that takes an array and returns only numbers greater than 10.
// Solve:=>
    // const getGreaterThan10 = (arr) => {
    //     return arr.filter((num) => num > 10);
    // };

    // console.log(getGreaterThan10([5, 12, 8, 20, 15]));

// output: 1> [12, 20, 15]

// Q10. Object with Arrow Function
// > Create an object user with:
// > name: "Ayush"
// > age: 23
// > an arrow function greet that returns "Hello Ayush".
// > Then call the function using:
// Solve:=>
//     const user = {
//         name: "Ayush",
//         age: 23,

//         greet: () => {
//             return "Hello Ayush";
//         }
//     };
    
//     console.log(user.greet());

// // Output: Hello Ayush



// // JavaScript IIFE — 10 Practice Questions
// IIFE = Immediately Invoked Function Expression
// Function jo define hote hi immediately execute ho jata hai.

// Q1. Basic IIFE
// Ek IIFE banao jo "Hello JavaScript" print kare.
// Solve:=>
// (function () {
//     console.log("Hello Ayush");
// })();

// Output: 1> Hello Ayush

// Q2. Number with IIFE
// Ek IIFE banao jo 10 + 20 calculate karke result print kare.
// Solve:=>
// (function () {
//     console.log(10 + 20);
// })();

// Output: 1> 30

// Q3. Parameter IIFE
// Ek IIFE banao jo name = "Ayush" parameter receive kare aur "Hello Ayush" print kare.
// Solve:=>
// (function (name) {
//     console.log("Hello " + name);
// })("Ayush");

// Output: 1> Hello Ayush

// Q4. Two Parameters
// Ek IIFE banao jo a = 10 aur b = 20 receive kare aur unka sum print kare.
// Solve:=>
// (function (a, b) {
//     console.log(a + b);
// })(10, 20);

// Output: 1> 30