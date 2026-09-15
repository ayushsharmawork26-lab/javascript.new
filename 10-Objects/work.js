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

// Q7. Object method
// > Create a user object with a name property and a greet() method.
// The method should print:
// Hello, my name is Ayush
// Solve:=>
    // const user = {
    //     name: "Ayush",

    //     greet: function(){
    //         console.log(`Hello, my name is ${this.name}`);
    //     }
    // };

    // user.greet();

    // output: 1> Hello, my name is Ayush

// Q8. Nested object
// > Create an object student containing:
// > name
// > age
// > address

// > Inside address, add:

// > city 
// > state
// > pincode
// Solve:=>
    // const student = {
    //     name: "Ayush",
    //     age:  23,

    //     address: {
    //         city: "Chandighar",
    //         state: "Punjab",
    //         pincode: 160001
    //     }
    // };

    // console.log(student.address.city);
    // console.log(student.address.state);

// output 1> Chandighar
//        2> Punjab

// Q9. Object.keys() and Object.values()
// > Create a product object with:
// > name
// > price
// > category
// > stock

// Print:
// All keys using Object.keys()
// All values using Object.values()
// Solve:=>
    // const product = {
    //    name: "Laptop",
    //    price: 55000,
    //    category: "Electronics",
    //    stock: 10
    // };

    // console.log(Object.keys(product));
    // console.log(Object.values(product));

// Output: 1> ["name", "price", "category", "stock"]
//         2> ["Laptop", 55000, "Electronics", 10]

// Q10. for...in loop
// > Create an object:
// const jsUser = {
//     name: "Ayush",
//     age: 23,
//     city: "Chandigarh",
//     course: "MCA"
// };
// Solve:=>
//     const jsUser = {
//     name: "Ayush",
//     age: 23,
//     city: "Chandigarh",
//     course: "MCA"
// };

// for (let key in jsUser) {
//     console.log(`${key} : ${jsUser[key]}`);

// }

// output 1> name : Ayush
//        2> age : 23
//        3> city : Chandigarh
//        4>  course : MCA

// +++++++++++++++++++ (Part 2) +++++++++++++++++++++++++++

// Q1. Create an object student with name, age, course, and city. Print all values using dot notation ?
// Solve:=>
    // const student = {
    //     name: "Ayush",
    //     age: 23,
    //     course: "MCA",
    //     city: "Chandighar"
    // };

    // console.log(student.name);
    // console.log(student.age);
    // console.log(student.course);
    // console.log(student.city);

// Output: 1> Ayush
//         2> 23
//         3> MCA
//         4> Chandighar

// Q2. Create an object:
// const user = {
//     name: "Ayush",
//     age: 23,
//     email: "ayush@gmail.com"
// };
// Change the age to 24 and print the updated object.
// Solve:=>
    // const user = {
    //     name: "Ayush",
    //     age: 23,
    //     email: "ayush@gamil.com"
    // };

    // user.age = 24;

    // console.log(user);

// Output: 1> { name: "Ayush", age: 24, email: "ayush@gmail.com" }

// Q3. Add a new property isLoggedIn: true to an existing object and print it ?
// Solve:=>
    // const user = {
    //     name: "Ayush",
    //     age: 23
    // };

    // user.isLoggedIn = true;

    // console.log(user);

// Output  1> {name: 'Ayush', age: 23, isLoggedIn: true}

// Q4. Delete the email property from an object and print the object ?
// Solve:=>
    // const user = {
    //     name: "Ayush",
    //     age: 23,
    //     email: "ayush@gamil.com"
    // };

    // delete user.email;

    // console.log(user);
// Output 1> {name: 'Ayush', age: 23}

// Q5. Create an object with a property "full name". Access it using bracket notation ?
// Solve:=>
    // const user = {
    //     name: "Ayush",
    //     "full name": "Ayush Sharma"
    // };

    // console.log(user["full name"])

// output 1> Ayush Sharma

// Q6. Create an object product with:
// > name
// > price
// > quantity
// > Calculate and print the total price (price × quantity).
// Solve:=>
    // const product = {
    //     name: "Laptop",
    //     price: 50000,
    //     quantity: 2
    // };

    // const total = product.price * product.quantity;

    // console.log(total);

// output: 1> 100000

// Q7. Create an object student containing:
// marks: {
//     maths: 80,
//     science: 75,
//     english: 90
// }
// Print the science marks.
// Solve:=>
    // const student = {
    //     name: "Ayush",
    //     marks: {
    //         maths: 80,
    //         science: 75,
    //         english: 90
    //     }
    // };

    // console.log(student.marks.science);
// output: 1> 75


// Q8. Create an object containing an array ?
// skills: ["HTML", "CSS", "JavaScript", "React"]
// Solve:=>
    // const user = {
    //     name: "Ayush",
    //     skills: ["HTML", "CSS", "JavaScript", "React"]
    // };

    // console.log(user.skills[1]);
    // console.log(user.skills[3]);

// output 1> CSS
//        2> React

// Q9. Use Object.keys() and Object.values() on an object and print both results ?
// Solve:=>
    // const user = {
    //     name: "Ayush",
    //     age: 23,
    //     city: "Chandighar"
    // };

    // console.log(Object.keys(user));
    // console.log(Object.values(user));

// output 1> ["name", "age", "city"]
//           ["Ayush", 23, "Chandigarh"] 

// Q10. Create a user object with name, age, and city. Use a for...in loop to print ?
// name : Ayush
// age : 23
// city : Chandigarh
// Solve:=>
//     const user = {
//         name: "Ayush",
//         age: 23,
//         city: "Chandighar"
//     };

// for (const key in user) {
//     console.log(key + " : " + user[key]);
// }

// output 1> name : Ayush
//        2> age : 23
//        3> city : Chandigarh

// ++++++++ ( JavaScript Object Destructuring & JSON API — 10 Practice Questions ) +++++++

// Q1. Create an object user with name, age, and email. Use object destructuring to extract all three values and print them ?
// Solve:=>
    // const user = {
    //     name: "Ayush",
    //     age: 23,
    //     email: "ayush@gmail.com"
    // };

    // const { name, age, email } = user;

    // console.log(name);
    // console.log(age);
    // console.log(email);
// output: 1> Ayush
//         2> 23
//         3> ayush@gmail.com

// Q2. Create an object:
// > Destructure only name and course and print them.
// Solve:=>
//     const student = {
//     name: "Ayush",
//     course: "MCA",
//     age: 23
// };

// const { name, course} = student;

// console.log(name);
// console.log(course);
// output: 1> Ayush
//         2> MCA

// Q3. Create an object with a property fullName. Use destructuring to store it in a variable called name ?
// const user = {
//     fullName: "Ayush Sharma",
//     age: 23
// };

// const { fullName: name} = user;
// console.log(name);
// output: 1> Ayush Sharma

// Q4. Create a nested object ?
// Use nested destructuring to extract city and country =>
// Solve:=>
//     const user = {
//     name: "Ayush",
//     address: {
//         city: "Chandigarh",
//         country: "India"
//     }
// };

// const {
//     address: { city, country }
// } = user;

// console.log(city);
// console.log(country);

// Output: 1> Chandighar
//         2> India