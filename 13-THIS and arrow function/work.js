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

// Q5. Return Value
// Ek IIFE banao jo 5 * 5 calculate kare aur returned value ko ek variable result mein store karo.
// Solve:=>
    // const result = (function () {
    //     return 5 * 5;
    // })();

    // console.log(result);

// Output: 1> 25

// Q6. Private Variable
// IIFE ke andar let password = "12345" banao aur password ko print karo.
// Try: IIFE ke bahar password access karne par kya hoga?
// Solve:=>
// (function () {
//     let password = "12345";
//     console.log(password);
// })();

// Output: 1> 12345 

// Q7. Arrow Function IIFE
// Ek arrow function IIFE banao jo "Arrow IIFE" print kare.
// Solve:=>
// (() => {
//     console.log("Arrow IIFE");
// })();

// Output: 1> Arrow IIFE

// Q8. Even/Odd
// IIFE ko num = 15 pass karo aur check karo ki number even hai ya odd.
// Solve:=>
// (function (num) {
//     if (num % 2 === 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// })(15);
// output: Odd

// Q9. Counter
// IIFE ke andar let count = 0 banao, count ko 1 se increase karo aur result print karo.
// Solve:=>
// (function () {
//     let count = 0;

//     count++;
//     console.log(count);
// })();

// Output: 1> 1

// Q10. Multiplication Table
// IIFE banao jo 5 ko parameter ke roop mein receive kare aur uski 1 se 10 tak multiplication table print kare.
// Solve:=>
// (function (num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} x ${i} = ${num * i} `);
//     }

// })(5);
// output: 1> 5 x 1 = 5
//         2> 5 x 2 = 10
//         3> 5 x 3 = 15
//         4> 5 x 4 = 20
//         5> 5 x 5 = 25
//         6> 5 x 6 = 30
//         7> 5 x 7 = 35
//         8> 5 x 8 = 40
//         9> 5 x 9 = 45
//        10> 5 x 10 = 50