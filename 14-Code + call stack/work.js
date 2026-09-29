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