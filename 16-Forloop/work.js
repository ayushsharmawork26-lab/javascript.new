// JavaScript for Loop — 10 Practice Questions
// Q1. Print Numbers
// Use a for loop to print numbers 1 to 10.
// Solve:=>
    // for (let i = 0; i <= 10 ; i++) {
    //    console.log(i);
        
    // }
// Output: 1> 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// Q2. Even Numbers
// Use a for loop to print all even numbers from 1 to 20.
// Solve:=>
    // for (let i = 0; i <= 20 ; i++) {
    //    if (i % 2 === 0) {
    //     console.log(i);
    //    }
        
    // }

// Output: 1> 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// Q3. Odd Numbers
// Use a for loop to print all odd numbers from 1 to 20.
// Solve:=>
    // for (let i = 0; i <= 20; i++) {
    //     if (i % 2 !== 0) {
    //         console.log(i);
    //     }
        
    // }

// Output: 1> 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// Q4. Reverse Loop
// Use a for loop to print numbers from 10 to 1.
// Solve:=>
//    for (let i = 10; i >= 1; i--) {
//     console.log(i);
//    }

// Output: 1> 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// Q5. Sum of Numbers
// Use a for loop to calculate the sum of numbers 1 to 10.
// Solve:=>
//     let sum = 0;

// for (let i = 1; i <= 10; i++) {
//     sum = sum + i;
// }

// console.log(sum);

// Output: 1> 55

// Q6. Multiplication Table
// Create a variable:
// Solve:=>
//     let num = 5;

//    for (let i = 1; i <= 10; i++ ) {
//     console.log(num * i);
//    }

// Output: 1> 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 

// Q7. Array with for Loop
// Solve:=>
    // let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

    // for (let i = 0; i < fruits.length; i++) {
    //     console.log(fruits[i]);
    // }

// Output: 1> Apple
//         2> Banana
//         3> Mango
//         4> Orange
//         5> Grapes

// Q8. Count Even Numbers
// Use a for loop to count how many even numbers are present between 1 and 50.
// Solve:=>
//     let count = 0;

//    for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         count++;
//     }
//    }

//    console.log(count);

// Output: 1> 25

// Q9. Factorial
// Solve:=>
//     let num = 5;
// let factorial = 1;

// for (let i = 1; i <= num; i++) {
//     factorial = factorial * i;
// }

// console.log(factorial);
// Output: 1> 120

// Q10. Find Largest Number
// Solve:=>
//     let numbers = [10, 25, 7, 45, 32, 18];

// let largest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }

// console.log(largest);

// Output: 1> 45



// --------------------------(while & do...while)--------------->

// JavaScript while & do...while — 10 Practice Questions
// Q1. Print numbers from 1 to 10 using a while loop.
// Solve:=>
    // let i = 1;
    
    // while (i <= 10) {
    //     console.log(i);
    //     i++;
    // }

// Output: 1, 2, 3, 4, 5, 6, 7, 8,  9, 10

// Q2. Print numbers from 10 to 1 using a while loop.
// Solve:=>
    // let i = 10;
 
    // while (i >= 1) {
    //     console.log(i);
    //     i--;
    // }

// Output: 1> 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// Q3. Print all even numbers from 1 to 20 using a while loop.
// Solve=>
    // let i = 1;
  
    // while (i <= 20) {
    //     if (i % 2 === 0) {
    //         console.log(i);
    //     }
    //     i++;
    // }

// Output: 2 4 6 8 10 12 14 16 18 20

// Q4. Calculate the sum of numbers from 1 to 10 using a while loop.
// Solve:=>
    // let i = 1;
    // let sum = 0;

    // while (i <= 10) {
    //     sum = sum + i;
    //     i++;
    // }

    // console.log(sum);

// Output: 1> 55

// Q5. Create a variable num = 5 and print its multiplication table using a while loop.
// Solve:=>
    // let num = 5;
    // let i = 1;

    // while (i <= 10) {
    //     console.log(`${num} x ${i} = ${num * i}`);
    //     i++;
    // }

// Output: 1> 5 x 1 = 5
//         2> 5 x 2 = 10
//         3> 5 x 3 = 15
//         4> 5 x 4 = 20
//         5> 5 x 5 = 25
//         6> 5 x 6 = 30
//         7> 5 x 7 = 35
//         8> 5 x 8 = 40
//         9> 5 x 9 = 45
//        10> 5 x 10 = 50


// Q6. Print numbers from 1 to 10 using a do...while loop.
// Solve:=>
//     let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

// Output: 1> 

// Output: 1 2 3 4 5 6 7 8 9 10


// Q7. Print all odd numbers from 1 to 20 using a do...while loop.
// Solve:=>
    // let i = 1;
   
    // do {
    //     if (i % 2 !== 0) {
    //         console.log(i);
    //     }
    //     i++;
    // }while (i <= 20);

// Output: 1 3 5 7 9 11 13 15 17 19

// Q8. Calculate the sum of numbers from 1 to 20 using a do...while loop.
// Solve:=>
//     let i = 1;
// let sum = 0;

// do {
//     sum = sum + i;
//     i++;
// } while (i <= 20);

// console.log(sum);

// output: 1> 210


// Q9. Create num = 7 and print its multiplication table (7 × 1 to 7 × 10) using do...while.
// Solve:=>
//     let num = 7;
// let i = 1;

// do {
//     console.log(`${num} x ${i} = ${num * i}`);
//     i++;
// } while (i <= 10);

// Output: 1> 7 x 1 = 7
//            7 x 2 = 14
//            7 x 3 = 21
//            7 x 4 = 28
//            7 x 5 = 35
//            7 x 6 = 42
//            7 x 7 = 49
//            7 x 8 = 56
//            7 x 9 = 63
//            7 x 10 = 70

// Q10. What will be the output?
// Solve:=>
//     let i = 10;

// do {
//     console.log(i);
//     i++;
// } while (i < 5);

// Output: 1> 10



// ----------------(JavaScript forEach() — 10 Practice Tasks)--------->

// Q1. Print Array Values
// Solve:=>
    // const fruits = ["Apple", "Banana", "Mango", "Orange"];
    // fruits.forEach (function (fruits){
    //     console.log(fruits);
    // });

// Output: 1> Apple, Banana, mango, orange


// Q2. Print Numbers
// Solve:=>
    // const numbers = [10, 20, 30, 40, 50];
    // numbers.forEach(function (num){
    //     console.log(num)
    // });

// Output: 1> 10, 20, 30, 40, 50

// Q3. Double Each Number
// Solve:=>
    // const numbers = [1, 2, 3, 4, 5];
    // numbers.forEach(function (num){
    //     console.log(num * 2)
    // });

// Output: 1> 2, 4, 6, 8, 10

// Q4. Check Even Numbers
// Solve:=>
//     const numbers = [11, 20, 35, 42, 55, 60];

//   numbers.forEach(function (num) {
//     if (num % 2 == 0) {
//         console.log(num);
//     }
//   });

// Output: 1> 20, 42, 60