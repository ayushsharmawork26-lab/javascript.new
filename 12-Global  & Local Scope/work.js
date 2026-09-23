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

// Q5. Create a global variable count = 10. Create a function that changes its value to 20. Print count before and after calling the function ?
// Solve:=>
    // let count = 10;
    
    // function changeCount() {
    //     count = 20;
    // }

    // console.log(count);

    // changeCount();

    // console.log(count);

// output: 1> 10
//         2> 20

// Q6. Create an if block using let:
//  if (true) {
    // let username = "Ayush";
// }
// > Try to access username outside the block. What happens?

// Solve:=>
    // if (true) {
    //     let username = "Ayush";
    //     console.log(username);
    // }

    // console.log(username);

// output: 1> Ayush
//         2> ReferenceError: username is not defined

// Q7. Create a global variable x = 100. Inside a function create a local variable y = 200. Print both variables inside the function ?
// Solve:=>
//     let x = 100;

//    function test() {
//     let y = 200;

//     console.log(x);
//     console.log(y);
//    }

//    test();

// Output: 1> 100
//         2> 200

//  Q8. Create a function calculate() with local variables:
    // let a = 10;
    // let b = 20;
// Return their sum and print the result outside the function.
// Solve=>
    // function calculate() {
    //     let a = 10;
    //     let b = 20;

    //     return a + b;
    // }

    // let result = calculate();

    // console.log(result);

// output: 1> 30

// Q9. Create a global variable language = "JavaScript". Create a function that prints this variable without declaring it again inside the function ?
// Solve:=> 
    // let language = "JavaScript";
      
    //  function showLanguage() {
    //     console.log(language);
    //  }

    //  showLanguage();

// Output: 1> JavaScript

// Q10. Predict the output:
// Solve:=>
//     let username = "Ayush";

//     function test() {
//     let username = "Rahul";
//     console.log(username);
//  }

//    test();
//    console.log(username);

// output: 1> Rahul
//         2> Ayush

// JavaScript Scope Level — 10 Practice Questions:
// Q1. Global Scope
// Create a global variable name = "Ayush" and print it inside a function.
// Solve:=
      let name = "Ayush";

function showName() {
    console.log(name);
}

showName();

// output: 1> Ayush
