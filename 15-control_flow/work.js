// JavaScript Control Flow — 10 Practice Tasks

// Q1. if
// Create a variable age = 20.
// If age is 18 or above, print "You are eligible to vote".
// Solve:=>
    // let age = 20;
  
    // if (age >= 18) {
    //     console.log("You are eligible to vote");
    // }

// Output: 1> You are eligible to vote

// Q2. if...else
// Create a variable number = 15.
// Check whether the number is even or odd.
// Solve:=>
    // let number = 15;
 
    // if (number % 2 === 0) {
    //     console.log("Even");
    // } else {
    //     console.log("Odd");
    // }

// Output: Odd

// Q3. else if
// Create a variable marks = 75.
// Solve:=>
    // let marks = 75;
   
    // if (marks >= 90 && marks <= 100) {
    //     console.log("Grade A");
    // } else if (marks >= 75) {
    //     console.log("Grade B");
    // } else if (marks >= 60) {
    //     console.log("Grade C");
    // } else if (marks >= 40) {
    //     console.log("Grade D");
    // } else {
    //     console.log("Fail");
    // }

// Output: 1> Grade B

// Q4. Logical Operators
// Solve:=>
    // let age = 25;
    // let hasLicense = true;

    // if (age >= 18 && hasLicense === true) {
    //     console.log("You can drive a car");
    // } else {
    //     console.log("You cannot drive a car");
    // }

// Output: 1> You can drive a car

// Q5. Nested if
// Solve:=>
    // let username = "Ayush";
    // let password = "12345";

    // if (username === "Ayush") {
    //     if (password === "12345") {
    //         console.log("Login successful");
    //     } else {
    //         console.log("Wrong password");
    //     }
    // } else {
    //     console.log("Wrong username");
    // }

// Output: 1> Login successful

//  Q6. switch
// Solve:=>
//     let day = 3;

//     switch (day) {
//         case 1:
//           console.log("Monday");
//           break;
//         case 2:
//           console.log("Tuesday");
//           break;
//         case 3:
//           console.log("Wednesday");
//           break;
//         case 4:
//           console.log("Thursday");
//           break;
//         case 5:
//           console.log("Friday");
//           break;
//         case 6:
//           console.log("Saturday");
//           break;
//         case 7:
//           console.log("Sunday");
//           break;

//          default:
//         console.log("Invalid day");
//     }

// // Output: 1> Wednesday

//  Q7. Ternary Operator ?
// Solve:=>
    // let age = 20;
   
    // let result = age >= 18 ? "Adult" : "Minor";

    // console.log(result);

// Output: 1> Adult

// Q8. for Loop ?
// Solve:=>
    // for (let i = 1; i <= 10; i++) {
    //     console.log(i);
    // }

// Output: 1> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// Q9. while Loop ?
// Solve:=>
    // let i = 2;
    
    // while (i <= 20) {
    //     console.log(i);
    //     i += 2;
    // }

// Output: 1> 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// Q10. Hard — Login + Conditions?
// Solve:=>
//     let username = "Ayush";
//     let password = "12345";
//     let isVerified = true;

//     if (username !== "Ayush") {
//         console.log("Invalid username");
//     } else if (password !== "12345") {
//         console.log("Invalid password");
//     } else if (isVerified === false) {
//         console.log("Account not verified");
//     } else {
//         console.log("Login successful");
//     }

 // Output: 1> Login successful