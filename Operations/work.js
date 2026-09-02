// 1. Arithmetic Operators ?
// =>.Do numbers 25 aur 7 lo aur unka +, -, *, /, % aur ** result print karo.?
// solve => 
// let a = 25;
// let b = 7;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

// 2. Increment & Decrement ?
// ==> let a = 10 lo. a++, ++a, a--, aur --a ka use karke values console mein print karo.?
// solve ==>
// let a = 10;
// console.log(a++);
// console.log(++a);
// console.log(a--);
// console.log(--a);

// 3. Assignment Operators ?
// ==> let x = 20 lo aur +=, -=, *=, /=, %= operators ka use karke x ki value change karo.?
// solve ===>
    // let x = 20;
    // x += 5;
    // console.log(x);

    // x-= 3;
    // console.log(x);

    // x *= 2;
    // console.log(x);

    // x /= 4;
    // console.log(x);

    // x %= 3;
    // console.log(x);

// 4. Comparison Operators ?
// ==>let a = 15 aur let b = "15" lo. ==, ===, !=, !==, >, <, >=, <= sab check karo.?
// solve ===>
    // let a = 15;
    // let b = 15;
    // console.log(a == b);
    // console.log(a === b);
    // console.log(a != b);
    // console.log(a !== b);
    // console.log(a > b);
    // console.log(a < b);
    // console.log(a >= b);
    // console.log(a <= b);

// 5. Logical AND (&&) ?
// ==> age = 22 aur hasLicense = true lo. Check karo ki person car drive kar sakta hai ya nahi.?
// slove===>
    // let age = 22;
    // let hasLicense = true;

    // console.log(age >= 18 && hasLicense);

    
// 6. Logical OR (||) ?
// ===> isStudent = false aur hasJob = true lo. Check karo ki person ke paas student status ya job hai.?
// solve===>
//    let isStudent = false;
//    let hasJob    = true;
   
//    console.log(isStudent || hasJob);

// 7. Logical NOT (!) ?
// ==>isLoggedIn = false lo aur ! operator ka use karke uski opposite value print karo.?
// solve==>
    // let isLoggedIn = false;
    //  console.log(!isLoggedIn);
    
// 8. Ternary Operator ?
// ==> marks = 75 lo. Ternary operator se check karo: marks >= 40 hain to "Pass" otherwise "Fail".?
// solve==>
    // let marks = 75;
    
    // let result = marks >= 40 ? "pass" : "fail";
    // console.log(result);

// 9. Mixed Operators ?
// ==> let a = 10, b = 5, c = 2 lo aur expression solve karo: ?
// solve==>
    // let a = 10;
    // let b = 5;
    // let c = 2;

    // console.log(a + b * c );
    // console.log((a + b) * c);

// 10. Hard Task 💪 ?
// solve===>
     let age = 21;
     let marks = 80;
     let attendance = 75;

     let result =
          age >= 18 &&
          marks >= 60 &&
          attendance >= 75
          ? "Eligible"
          : "Not Eligible";

          console.log(result);