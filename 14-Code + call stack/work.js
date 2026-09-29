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