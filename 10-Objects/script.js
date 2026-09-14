// // singleton
// // Object.create

// // onject literals

// const mySym = Symbol("Key1")

// const jsUser = {
//     name: "Ayush",
//     "full name": "Ayush sharma",
//     mySym: "myKey1",
//     age:  18,
//     location: "Chnadighar",
//     email: "ayushsharma@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// // console.log(jsUser.email)
// // console.log(jsUser["email"])
// // console.log(jsUser["full name"])
// // console.log(typeof jsUser.mySym)

// jsUser.email = "ayush@chatgpt.com"
// // Object.freeze(jsUser)
// jsUser.email = "ayush@ceosoft.com"
// // console.log(jsUser)

// jsUser.greeting = function(){
//     console.log("hello js user ");
// }

// jsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

// +++++++++++++++++++ Objects part 2 ++++++++++++++++++++++++++++///

// const tinderUser = new Object() (single term object)
// const tinderUser = {}  (non single term object)

console.log(tinderUser);