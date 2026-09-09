// JavaScript Date & Time — 10 Tasks =>
// Q1. Create a new Date object and print the current date and time ?
// Solve:=>
// let date = new Date();
// console.log(date);

// output: 1> Tue Sep 08 2026 08:52:09 GMT+0530 (India Standard Time)

// Q2. Create a date for 14 January 2023 and print it using toLocaleString() ?
// Solve:=>
//     let date = new Date("2023-01-14");
//    console.log(date.toLocaleString());

//    output: 1> 1/14/2023, 5:30:00 AM

// Q3. Get the current year, month, and day using:

// . getFullYear()
// . getMonth()
// . getDate()
// Solve:=>
//     let date =  new Date();

//    console.log("year:", date.getFullYear());
//    console.log("Month:", date.getMonth() + 1);
//    console.log("getDate:", date.getDate());

//    output: 1> year: 2026
//            2> Month: 9
//            3> getDate: 8

// Q4. Print the current day of the week using getDay(). Also display the day name like Monday, Tuesday, etc ?
// Solve:=>
// let date = new Date();

// let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
// ];

// console.log(days[date.getDay()]);

// output:  1> Tuesday

// Q5. Create a date for 25 December 2025 and print ?

// . Year
// . Month
// . Date
// . Day
// Solve:=>
// let date = new Date("2025-12-25");
// console.log("Year:", date.getFullYear());
// console.log("Month:", date.getMonth() + 1);
// console.log("Date:", date.getDate());

// let days = [
//      "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
// ];

// console.log("Day:", days[date.getDay()]);

// output: 1> Year: 2025
//         2> Month: 12
//         3> Date: 25
//         4>  Day: Thursday

// Q6. Create a date with a specific time, for example 5:30 PM, and print it using toLocaleString()?
// Solve:=>
// let date =  new Date(2025, 11, 25, 17, 30);

// console.log(date.toLocaleString());

// output: 1> 12/25/2025, 5:30:00 PM

// Q7. Use Date.now() to get the current timestamp and print it ?
// Solve:=>
// let timestamp = Date.now();

// console.log(timestamp);

// output: 1> 1788839427624

// Q8. Create a date and use getTime() to convert it into a timestamp?
// Solve:=>
// let date = new Date("2025-12-25");

// console.log(date.getTime());

// output: 1> 1766620800000

// Q9. Print the current date in this format ?
// Solve:=>
// let date = new Date();

// console.log(
//     date.toLocaleDateString("en-us",{
//         weekday: "long",
//         day: "numeric",
//         month: "long",
//         year:"numeric"

//     })
// );

// output: 1> Wednesday, September 9, 2026

// Q10. Create a date and use toLocaleString() to print only ?
// . Weekday
// . Month
// . Day
// . Year
// . Hour
// . Minute
// . Second

// Solve:=>
// let date = new Date();

// console.log(
//     date.toLocaleString("en-us", {
//         weekday: "long",
//         month: "long",
//         day: "numeric",
//         year: "numeric",
//         hour: "numeric",
//         minute: "numeric",
//         second: "numeric"
//     })
// );

// output:=> Wednesday, September 9, 2026 at 8:07:47 AM
