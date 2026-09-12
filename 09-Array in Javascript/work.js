// JavaScript Array — 10 Practice Tasks:=>
// Q1. Create an array of 5 numbers and print all the elements using console.log()?
// Slove:=>

    // let numbers = [10, 20, 30, 40, 50];

    // console.log(numbers);

    // Output: 1> [10, 20, 30, 40, 50]

// Q2. Create an array of fruits: ["Apple", "Banana", "Mango", "Orange"]. Print the first and last element ?
// Solve:=>

    // let fruits = ["Apple", "Banana", "Mango", "Orange"];

    // console.log(fruits[0]);
    // console.log(fruits[fruits.length - 1]);

    // output: 1> Apple
    //         2> Orange

// Q3. Create an array of numbers [10, 20, 30, 40, 50]. Find and print its length ?
// Solve:=>
     
    // let numbers = [10, 20, 30, 40, 50];

    // console.log(numbers.length);
    // output: 1> 5

// Q4. Create an array of 5 names. Add a new name at the end using push() ?
// Solve:=>
    // let Name = ["Ayush", "Rahul", "Aman", "Rohit",]
    // Name.push("Vikas");
    // console.log(Name);

//  output: 1> ["Ayush", "Rahul", "Aman", "Rohit", "Vikas"]

// Q5. Create an array of numbers [10, 20, 30, 40]. Remove the last element using pop() and print the updated array ?
// Solve:=>

    // let numbers = [10, 20, 30, 40];
    // numbers.pop();
    // console.log(numbers);
    
// output: 1> [10, 20, 30]

// Q6. Create an array of colors ["Red", "Blue", "Green"]. Add "Yellow" at the beginning using unshift() ?
// Solve:=>
    // let colors = ["Red", "Blue", "Green"];
    // colors.unshift("Yellow");
    // console.log(colors);

// output: 1> ["Yellow", "Red", "Blue", "Green"]

// Q7. Create an array ["HTML", "CSS", "JavaScript", "React"]. Remove the first element using shift() and print the updated array ?
// Solve:=>
    // let skills = ["HTML", "CSS", "JavaScript", "React"];
    // skills.shift();

    // console.log(skills);

// output: 1> ["CSS", "JavaScript", "React"]

// Q8. Create an array of numbers [5, 10, 15, 20, 25]. Use a for loop to print every element ?
// Solve:=>

    // let numbers = [5, 10, 15, 20, 25];

    // for (let i = 0; i < numbers.length; i++){
    //     console.log(numbers[i]);
    // }

// output 1> 5
//        2> 10
//        3> 15
//        4> 20
//        5> 25

// Q9. Create an array [1, 2, 3, 4, 5]. Use map() to create a new array containing the square of each number ?
// Solve:=>
  
    // let numbers = [1, 2, 3, 4, 5];

    // let square = numbers.map(function(num){
    //     return num * num;
    // });

    // console.log(square);

// output: 1> [1, 4, 9, 16, 25]

// Q10. Create an array [10, 15, 20, 25, 30, 35]. Use filter() to create a new array containing only numbers greater than 20 ?
// Solve:=>

    // let numbers = [10, 15, 20, 25, 30, 35];

    // let result = numbers.filter(function(num){
    //     return num > 20;
    // });

    // console.log(result);

// output: 1> [25, 30, 35]

// ++++++++++++++++++ Array2 +++++++++++++//

// const marvel_heros = ["thor", "Ironman", "spiderman",]
// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3] [1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]

// // console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6,7, [4,5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Ayush"))
// console.log(Array.from("Ayush"));
// console.log(Array.from({name: "ayush"}))       ///////   Interesting

// let Score1 = 100
// let Score2 = 200
// let Score3 = 300

// console.log(Array.of(Score1, Score2, Score3));

//  +++++++++++++++++++  (2 part of Array) +++++++++++++++///
// Q1. Create an array of 5 numbers and print the largest number ?
// Solve:=>
//     let number = [10, 25, 7, 50, 32];
     
//    let largest = Math.max(...number);
//    console.log(largest);

//    output: 1> 50

// Q2. Create an array of numbers and calculate the sum of all elements using a loop?
// Solve:=>
    // let numbers = [10, 20, 30, 40, 50];
    // let sum = 0;

    // for (let i = 0; i < numbers.length; i++) {
    //     sum += numbers[i];
    // }

    // console.log(sum);

    // output: 1> 150

// Q3. Create an array and use filter() to print only the even numbers ?
// Solve:=>
    // let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    // let evenNumbers = numbers.filter((num) => num % 2 === 0);

    // console.log(evenNumbers);

//  output: 1> [2, 4, 6, 8]

// Q4. Create an array of numbers and use map() to create a new array containing the square of each number ?
// Solve:=>
    // let numbers = [2, 3, 4, 5];
    // let squares = numbers.map((num) => num * num);

    // console.log(squares);

// output: 1> [4, 9, 16, 25]

// Q5. Create an array of names and check whether "Ayush" exists using includes() ?
// Solve:=>
    // let names = ["Rahul", "Aman", "Ayush", "Rohit"];
     
    // console.log(names.includes("Ayush"));
    // output: 1> true

// Q6. Create an array of numbers and find the first number greater than 50 using find() ?
// solve:=>
    // let number = [20, 35, 45, 60, 75];
    // let result = number.find((num) => num > 50);

    // console.log(result);
    // output: 1> 60

// Q7. Create an array of numbers and sort them in ascending order ?
// Solve:=>
    // let numbers = [50, 10, 40, 20, 30];
    // numbers.sort((a, b) => a - b);

    // console.log(numbers);

// output: 1> [10, 20, 30, 40, 50]

// Q8. Create an array containing duplicate values and remove the duplicate elements ?
// Solve:=>
    // let numbers = [10, 20, 10, 30, 20, 40, 30];

    // let uniqueNumbers = [...new Set(numbers)];

    //  console.log(uniqueNumbers);

// Output: [10, 20, 30, 40]
