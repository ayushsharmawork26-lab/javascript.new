// JavaScript Call Stack — 10 Practice Questions
// Q1. Basic Function Call
// > Create a function first() that prints "First function" and call it.
// Solve:=>
    // function first() {
    //     console.log("First function");
    // }

    // first();

// Output: 1> First function

// Q2. Function Calling Function
// Create two functions:
// first() → calls second()
// second() → prints "Second function"
// Call first() and observe the Call Stack.
// Solve:=>
    // function first() {
    //     console.log("First function");
    //     second();
    // }

    // function second() {
    //     console.log("Second function");
    // }

    // first();

// Output: 1> First function
//         2> Second function

// Call Stack:
// first()
//   ↓
// second()
//   ↓
// second() finishes
//   ↓
// first() finishes

// Q3. Three-Level Call Stack
// Create:
// function one() {}
// function two() {}
// function three() {}
// Make one() call two(), and two() call three(). Print a message from each function.
// Solve:=>
    // function one() {
    //     console.log("One");
    //     two();
    // }

    // function two() {
    //     console.log("Two");
    //     three();
    // }

    // function three() {
    //     console.log("Three");
    // }

    // one();

// Output: 1> One
//         2> Two
//         3> Three

// Call Stack:
// one()
// one() → two()
// two() → three()
// three() finishes
// two() finishes
// one() finishes

// Q4. Return from Call Stack
// Create a function add(a, b) that returns the sum. Call it from another function calculate().
// Solve:=>
    // function add(a, b) {
    //     return a + b;
    // }

    // function calculate() {
    //     console.log(add(10, 20));
    // }

    // calculate();

// Output: 1> 30

// Call Stack:
// calculate()
//     ↓
// add()
//     ↓
// add() returns 30
//     ↓
// calculate() finishes

// Q5. Nested Function Calls
// Create:
// function A() {}
// function B() {}
// function C() {}
// function A() {
//     console.log("A started");
//     B();
// }

// function B() {
//     console.log("B started");
//     C();
// }

// function C() {
//     console.log("C started");
// }

// A();

// Output: 1> A started
//         2> B started
//         3> C started

// Stack:
// A()
//  ↓
// B()
//  ↓
// C()
//  ↓
// C() finishes
//  ↓
// B() finishes
//  ↓
// A() finishes

// Q6. Call Stack Order
// What will be the output?
//    Solve:=>
//     function first() {
//         console.log("1");
//         second();
//         console.log("2");
//     }

//     function second() {
//         console.log("3");
//     }

//     first();

// Output: 1> 1
//         2> 3
//         3> 2
// Why?
// first() starts → prints 1 → calls second() → prints 3 → second() finishes → back to first() → prints 2.

// Q7. Four Functions
// Create four functions:
// start() → login() → dashboard() → logout()
// Print a message inside each function and observe the order.
// Solve:=>
    // function start() {
    //     console.log("Start");
    //     login();
    // }

    // function login() {
    //     console.log("Login");
    //     dashboard();
    // }

    // function dashboard() {
    //     console.log("Dashborad");
    //     logout();
    // }

    // function logout() {
    //     console.log("Logout");
    // }

    // start();

// Output: 1> Start
//         2> Login
//         3> Dashboard
//         4> Logout

// Call Stack:
// start()
//  ↓
// login()
//  ↓
// dashboard()
//  ↓
// logout()
//  ↓
// logout finishes
//  ↓
// dashboard finishes
//  ↓
// login finishes
//  ↓
// start finishes

// Q8. Function with Return
// Solve:=>
    // function multiply(a, b) {
    //     return a * b;
    // }

    // function result() {
    //     console.log(multiply(5, 4));
    // }

    // result();

// Output: 1> 20

// Call Stack:
// result()
//    ↓
// multiply()
//    ↓
// return 20
//    ↓
// result()
//    ↓
// result finishes

// First enters: result()
// Then: multiply()
// First to leave: multiply()