// singleton
// Object.create

// onject literals

const mySym = Symbol("Key1")

const jsUser = {
    name: "Ayush",
    "full name": "Ayush sharma",
    mySym: "myKey1",
    age:  18,
    location: "Chnadighar",
    email: "ayushsharma@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(typeof jsUser.mySym)