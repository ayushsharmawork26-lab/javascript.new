// JavaScript Global & Local Scope — 10 Tasks
// Q1. Create a global variable name = "Ayush" and print it inside a function ?
// Solve:=>
    // let name = "Ayush";
    
    // function showName() {
    //     console.log(name);
    // }

    // showName();

// output: 1> Ayush

// Q2. Create a local variable age = 23 inside a function and try to print it outside the function. What happens?
// Solve:=>
    // function showAge() {
    //     let age = 23;
    //     console.log(age);
    // }

    // showAge();

    // console.log(age);

// Output:
// 23
// ReferenceError: age is not defined

// Q3. Create a global variable city = "Chandigarh". Inside a function, create another variable with the same name and value "Delhi". Print both values?
// Solve:=>
    // let city = "Chandighar";
  
    // function showCity() {
    //     let city = "Delhi";
    //     console.log(city);
    // }

    // showCity();
    // console.log(city);

// output: 1> Delhi
//         2> Chnadighar

// Q4. Create a function showMessage() with a local variable message = "Hello JavaScript". Print the message inside the function ?
// Solve:=>
    // function showMessage() {
    //     let message = "Hello JavaScript";
    //     console.log(message);
    // }

    // showMessage();

// output: 1> Hello JavaScript