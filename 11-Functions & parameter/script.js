


// function sayMyNmae() {
//     console.log("A");
//     console.log("Y");
//     console.log("U");
//     console.log("S");
//     console.log("H");

// }

// // sayMyNmae()

// // function addTwoNumbers(number1, Number2){
// //     console.log(number1 + Number2);
// // }

// function addTwoNumbers(number1, Number2){
   
//     let result = number1 + Number2
//     //  console.log("Ayush");
//     return result
   
// }

// const result = addTwoNumbers(3, 5)

// // console.log("result: ", result);

// function loginUsermessage(username){
//     if(username === undefined){
//        console.log("Please entry a username")
//        return
//     }
//     return `${username} just logged in`
// } 

// // console.log(loginUsermessage("Ayush"))
// console.log(loginUsermessage());

// +++++++++++++++++++++ Functions With Objects ++++++++++++++//

function calculateCarPrice(...num1){
    return num1
}

// console.log(calculateCarPrice(200, 400, 500, 5000))

const user = {
    username: "Ayush",
    prices: 199
}

function handleObjects(anyobject){
    console.log(`username is ${anyobject.username} and price is $ {anyobject.price}`);

}

handleObjects(user)