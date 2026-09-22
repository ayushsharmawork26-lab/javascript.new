// let a = 300

// if (true) {
// let a = 10
// const b = 20
// console.log("INNER: ", a);
// }


// console.log(a);
// // console.log(b);
// console.log(c);

// +++++++++++++++++++( Scope level in javascript )++++++++++++++++++

function one(){
    const username = "Ayush"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "Ayush"
    if (username === "Ayush") {
       const website = " youtube" 
    //    console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);