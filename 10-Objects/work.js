// JavaScript Objects — 10 Practice Tasks
// Q1. Create an object
// Create a student object with properties:
// . name
// . age
// . course
// . city
// solve:=>
//     const student = {
//         name: "Ayush",
//         age:  23,
//         course: "MCA",
//         city:  "Chandighar"
//     };

// console.log(student)

// output: 1> {name: 'Ayush', age: 23, course: 'MCA', city: 'Chandighar'}

// Q2. Access object properties
// >Create an object user with name, email, and age. Print:
// > name using dot notation
// > email using bracket notation
// Solve:=>
//     const user = {
//     name: "Ayush",
//     email: "ayush@gmail.com",
//     age: 23
// };

// console.log(user.name);
// console.log(user["email"]);

// output: 1> Ayush
//         2> ayush@gmail.com

// Q3. Update object property
// > Create a car object with brand, model, and price. Change the price and print the updated object.
// Solve:=>
    // const car = {
    //     brand: "Toyota",
    //     model: "Fortuner",
    //     price: 350000
    // };

    // car.price = 40000000;

    // console.log(car);

    // output: 1> brand: 'Toyota', model: 'Fortuner', price: 40000000}

// Q4. Add a new property
// > Create a person object with name and age. Add a new property job and print the object.
// Solve:=>
    // const person = {
    //     name: "Ayush",
    //     age:  23
    // };

    // person.job = "Full stack Developer";
    // console.log(person);

// output: 1>  {name: 'Ayush', age: 23, job: 'Full stack Developer'}

// Q5. Delete a property
// >Create a mobile object with brand, model, price, and color. Delete the color property and print the object.
// Solve:=>
// const mobile = {
//     brand: "Samsung",
//     model: "S25",
//     price: 70000,
//     color: "Black"
// };

// delete mobile.color;
// console.log(mobile);
// output: 1> {brand: 'Samsung', model: 'S25', price: 70000}

// Q6. Object with array
// > Create a student object containing:
// > name
// > age
// > subjects
// Solve:=>
    // const student = {
    //     name: "Ayush",
    //     age:  23,
    //     subjects: ["JavaScript", "React", "Node.js"]
    // };

    // console.log(student.subjects[1]);
    // output 1> React