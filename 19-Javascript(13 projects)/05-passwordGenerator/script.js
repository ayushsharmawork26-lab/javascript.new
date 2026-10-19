const passwordInput = document.querySelector("#password");
const lengthInput = document.querySelector("#length");
const numbersCheckbox = document.querySelector("#numbers"); 
const symbolsCheckbox = document.querySelector("#symbols"); 
const generateBtn = document.querySelector("#generateBtn"); 
const copyBtn = document.querySelector("#copyBtn"); 
const message = document.querySelector("#message");

// Generate Password Function
function generatePassword() {
    const length = Number(lengthInput.value);

    // validate password length
    if (!Number.isInteger(length) || length < 4 || length > 64) {
        message.textContent = "length 4 se 64 ke beech honi chahiye!";
        passwordInput.value = "";
        return;
    }

    // Default characters
     let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Include symbols
    if (symbolsCheckbox.checked) {
        chars += "!@#$%^&*()_+-=[]{}|;:,.<>?"; 
    } 

    let password = "";

    // Generate random password
    for (let i = 0; i < length; i++) {
        const randomIndex  = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    passwordInput.value = password;
    message.textContent = "password successfully generated! ✅";
}

// Generate button event
generateBtn.addEventListener("click", generatePassword);

// Copy password function
copyBtn.addEventListener("click",async function () {
const password = passwordInput.value;    
  if (password === "") {
    message.textContent = "Pehle password generate karo!";
    return;
}

try {
    await navigator.clipboard.writeText(password);
    message.textContent = "Password copied successfully! ✅";
} catch (error) {
    passwordInput.select();
    const copied = document.execCommand("copy");

    message.textContent = copied
        ? "Password copied successfully! ✅"
        : "Password copy nahi hua. Manually copy karo.";
}

});   
 
