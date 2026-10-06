// //  For

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         // console.log("5 is best number");
//     }
//     console.log(element);
    
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//    console.log('Inner loop value ${j} and inner loop ${i}');
//       console.log(i + '*' + j + ' = ' + i*j); 
//    }
    
// }
// let myArray = ["flash", "batman", "superman"]
// // console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     // console.log(element);
// }

// //  break and continue

// // for (let index = 1; index <= 20; index++) {
// //     if (index == 5) {
// //         console.log(`Detected 5`);
// //         break
// //     }
// //     console.log(`Value of i is ${index}`);
    
// // }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Dectected 5`);
//         continue
//     }
//     console.log(`value of i is $(index)`);

// }


// ------------------While and do while Loop-------------->
// let index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index}`);
//     index = index + 2
// }

// let myArray = ["Ayush", "Rahul", "Mohit", "Rohit"]

// let arr = 0
// while (arr < myArray.length) {
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr + 1
// }

// let score = 1

// do {
//     console.log(`score is ${score}`);
//     score++
// } while (score <= 10);



// ----------------------(Order Array LOOPS)---------------->
// for of
// ["", "",]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
     console.log(num);
}

