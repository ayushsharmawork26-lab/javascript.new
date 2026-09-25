const user = {
    username: "Ayush",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = "Ayush"
//     console.log(this.username);
// }

// one()

// const one = function () {
//     let username = "Ayush"
//     console.log(this.username);
// }

const one =  () => {
    let username = "Ayush"
    console.log(this);
}

// one()