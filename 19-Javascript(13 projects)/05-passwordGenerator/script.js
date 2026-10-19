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
}