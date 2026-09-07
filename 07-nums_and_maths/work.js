// JavaScript Numbers & Math — 10 Tasks :>

// Q1.> Create a variable num = -25 and print its positive value using Math.abs() ?
// solve: =>
    // let num = -25;
    // console.log(Math.abs(num));

// output: 1> 25

// Q2.> Create num = 7.8 and print the rounded value using Math.round()?
// slove:==>
    // let num = 7.8;
    // console.log(Math.round(num));

    // output: 1> 8

// Q3.> Create num = 5.2 and print the smallest integer greater than or equal to it using Math.ceil() ?
// Slove:=>
    // let num = 5.2;
    // console.log(Math.ceil(num));

    // output: 1> 6

// Q4. > Create num = 9.9 and print the largest integer less than or equal to it using Math.floor()?
// Solve:=>
    // let num = 9.9;
    // console.log(Math.floor(num));

    // output: 1> 9

// Q5. > Generate a random number between 1 and 10 using Math.random() and Math.floor()?
// Solve:=>
    // let randomNumber = Math.floor(Math.random() * 10) + 1;
    //  console.log(randomNumber);

    //  output: 1 to 10

// Q6. > Generate a random number between 50 and 100 ?
// Solve:>
    
    //   let randomNumber = Math.floor(Math.random() * 51) + 50;
    //   console.log(randomNumber);

    //   output: 1> 50 to 100

// Q7. > Create price = 499.5678 and display it with exactly 2 decimal places using toFixed()?
// Solve:=>
    // let price = 499.5678;
    // console.log(price.toFixed(2));

    // output: 1> 499.57

// Q8.> Create num = 123.456789 and display it with 5 significant digits using toPrecision() ?
// Solve:=>
    // let num = 123.456789;
    // console.log(num.toPrecision(5));

    // Output: 1> 123.46

// Q9. > Create amount = 1000000 and display it using Indian number formatting (1,000,000 → 10,00,000) with toLocaleString()?
// Solve:=>
    // let amount = 1000000;
    // console.log(amount.toLocaleString("en-IN"));

    // Output: 1> 10,00,000

// 10. Hard 🔥 Create min = 10 and max = 50. Generate a random integer between 10 and 50 (inclusive). Then:

// . Print the random Number. 
// . Print its square using Math.pow().
// . Print ist square root using Maths.sqrt().

// Solve:=>
    // let min = 10;
    // let max = 50;
    // let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    // console.log("Random Number:", randomNumber);
    // console.log("Square:", Math.pow(randomNumber, 2));
    // console.log("Square Root:", Math.sqrt(randomNumber));

//  Output: 1> Random Number: 25
//          2> Square: 625
//          3> Square Root: 5
    