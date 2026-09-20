// JavaScript Functions & Parameters — 10 Tasks
// Q1. Create a function greet() that prints "Hello JavaScript" ?
// Solve:=>
    // function greet() {
    //     console.log("Hello JavaScript");
    // }

    // greet();

// output: 1> Hello JavaScript

// Q2. Create a function welcome(name) that accepts a name as a parameter and prints "Welcome, Ayush" ?
// Solve:=>
    // function welcome(name) {
    //     console.log(`Welcome, ${name}`);
    // }

    // welcome("Ayush");

// Output: 1> Welcome, Ayush

// Q3. Create a function add(a, b) that takes two parameters and prints their sum ?
// Solve:=>
    // function add(a, b) {
    //     console.log(a + b);

    // }
    // add(10, 20);

// Output: 1> 30

// Q4. Create a function subtract(a, b) that returns the difference of two numbers?
// Solve:=>
    // function subtract(a, b) {
    //     return a - b;
    // }
   
    // console.log(subtract(20, 8));

// output: 12

// Q5. Create a function multiply(a, b) that accepts two parameters and returns their multiplication ?
// Solve:=>
    // function multiply(a, b){
    //     return a * b;
    // }

    // console.log(multiply(5, 4));

// output: 1> 20

// Q6. Create a function square(num) that accepts one parameter and returns its square ?
// Solve:=>
    // function square(num) {
    //     return num * num;
    // }

    // console.log(square(6));

// output: 1> 36

// Q7. Create a function checkEvenOdd(num) that checks whether a number is even or odd ?
// Solve:=>
    // function checkEvenOdd(num) {
    //     if (num % 2 === 0) {
    //         console.log("Even");
    //     } else {
    //         console.log("Odd");
    //     }
    // }

    // checkEvenOdd(7);

// output: 1> Odd

// Q8. Create a function calculateAge(birthYear) that calculates and returns the person's age ?
// Solve:=>
    // function calculateAge(birthYear) {
    //     return 2026 - birthYear;
    // }

    // console.log(calculateAge(2002));

// Output: 1> 24

// Q9. Create a function maxNumber(a, b, c) that accepts three parameters and returns the largest number ?
// Solve:=>
//     function maxNumber(a, b, c) {
//         return Math.max(a, b, c);
//     }

// console.log(maxNumber(25, 50, 35));

// output: 1> 50

// Q10. Create a function calculateTotal(price, quantity) that takes price and quantity as parameters and returns the total amount ?
// Solve:=>
    // function calculateTotal(price, quantity) {
    //     return price * quantity;
    // }

    // console.log(calculateTotal(500, 3));

// output: 1> 1500


// +++++++++++++++++++++++( JavaScript Functions + Objects — 10 Tasks )+++++++++++++++++++++++

// Q1. Create an object user with name, age, and city. Create a function showUser() that prints all the object values?
// Solve:=>

    // const user = {
    //     name: "Ayush",
    //     age: 23,
    //     city: "Chandighar"
    // };

    // function showUser(obj) {
    //     console.log(obj.name);
    //     console.log(obj.age);
    //     console.log(obj.city);
    // }

    // showUser(user);

// Output: 1> Ayush
        // 2> 23
        // 3> Chandighar

// Q2. Create an object student with name and marks. Create a function checkResult() that prints "Pass" if marks are 40 or above, otherwise "Fail" ?
// Solve:=>
//     const student = {
//         name: "Ayush",
//         marks: 75
//     };

//     function checkResult(obj) {
//         if (obj.marks >= 40) {
//             console.log("pass");
//         } else {
//             console.log("Fail");
//         }
//     }

// checkResult(student);
// Output: 1> Pass

// Q3. Create an object person with firstName and lastName. Create a function that returns the full name ?
// Solve:=>
//     const person = {
//         firstName: "Ayush",
//         lastName: "Sharma"
//     };

//     function fullName(Obj) {
//         return Obj.firstName + " " + Obj.lastName;
//     }

// console.log(fullName(person));
// output: 1> Ayush Sharma

// Q4. Create an object product with name, price, and quantity. Create a function that calculates and returns the total price ?
// Solve:=>
//     const product = {
//         name: "Laptop",
//         price: 5000,
//         quantity: 2
//     };

//     function totalPrice(obj) {
//         return obj.price * obj.quantity;
//     }

// console.log(totalPrice(product));

// Output: 1> 10000

// Q5. Create an object car with brand, model, and year. Create a function carDetails() that prints the car information ?
// Solve:=>
    // const car = {
    //     brand: "Toyota",
    //     model: "Fortuner",
    //     year: 2024
    // };

    // function carDetails(obj) {
    //     console.log("Brand:", obj.brand);
    //     console.log("Model:", obj.model);
    //     console.log("Year", obj.year);
    // }

    // carDetails(car);

// output: 1> Brand: Toyota
//         2> Model: Fortuner
//         3> year: 2024

// Q6. Create an object user with name and age. Create a function that takes the object as a parameter and prints "Adult" if age is 18 or above, otherwise "Minor" ?
// Solve:=>
    // const user2 = {
    //     name: "Ayush",
    //     age: 23
    // };

    // function checkAge(obj) {
    //     if (obj.age >= 18) {
    //         console.log("Adult");
    //     } else {
    //         console.log("Minor")
    //     }
    // }
    // checkAge(user2);

// output: 1> Adult

// Q7. Create an object calculator with two numbers a and b. Create separate functions for: ?
// > Addition
// > Subtraction
// > Multiplication
// > Division
// Solve:=>
//     const calculator = {
//         a: 20,
//         b: 10
//     };

//     function add(obj) {
//         return obj.a - obj.b;
//     }

//     function subtract(obj) {
//         return obj.a * obj.b;
//     }

//     function multiply(obj) {
//     return obj.a * obj.b;
// }

// function divide(obj) {
//     return obj.a / obj.b;
// }

// console.log("Addition:", add(calculator));
// console.log("Subtraction:", subtract(calculator));
// console.log("Multiplication:", multiply(calculator));
// console.log("Division:", divide(calculator));

// output: 1> Addition: 10
//         2> Subtraction: 200
//         3> Multiplication: 200
//         4> Division: 2

// Q8. Create an object employee with name, salary, and experience. Create a function that increases the salary by 10% if experience is greater than 2 years ?
// Solve:=>
    // const employee = {
    //     name: "Ayush",
    //     salary: 30000,
    //     experience: 3
    // };

    // function increaseSalary(obj){
    //     if (obj.experience > 2) {
    //         obj.salary = obj.salary + (obj.salary * 10 / 100);
    //     }

    //     return obj.salary;
    // }

    // console.log(increaseSalary(employee));

// output: 1> 33000

// Q9. Create an object student with ?
// Solve:=>
    // const student2 = {
    //     name: "Ayush",
    //     marks: [80, 75, 90, 85]
    // };

    // function averageMarks(obj) {
    //     let total = 0;

    //     for (let mark of obj.marks) {
    //         total += mark;
    //     }

    //     return total / obj.marks.length;
    // }

    // console.log(averageMarks(student2));

// output: 1> 82.5

// Q10. Create an object bankAccount with name and balance. Create two functions ?
// > deposit(amount) → adds money to balance
// > withdraw(amount) → subtracts money if sufficient balance is available.
// Solve:=>
    // const bankAccount = {
    //     name: "Ayush",
    //     balance: 5000
    // };

    // function deposit(amount) {
    //     bankAccount.balance += amount;
    //     console.log("Balance:", bankAccount.balance);
    // }

    // function withdraw(amount) {
    //     if (amount <= bankAccount.balance) {
    //         bankAccount.balance -= amount;
    //         console.log("Balance:", bankAccount.balance);
    //     } else {
    //         console.log("Insufficient Balance");
    //     }
    // }

    // deposit(2000);
    // withdraw(3000);
    // withdraw(10000);

// output 1> Balance: 7000
//        2> Balance: 4000
//        3> Insufficient Balance