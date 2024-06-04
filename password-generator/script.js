function passwordGenerator() {
    
    //  creating four variables
    const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberValues = "0123456789";
    const specialCharacters = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";

    // Fetching the element with id's
    const passwordInput = document.getElementById("passkey");
    const passwordLength = document.getElementById("pass-length").value;
    const lowerCase = document.getElementById("lower-case");
    const upperCase = document.getElementById("upper-case");
    const numbers = document.getElementById("numbers");
    const symbols = document.getElementById("symbols");

    let characters = "";
    let key = "";

    // checking the conditions, whether checkbox is checked or not
    // if the user checked lower-case characters, then we're adding into the lower-case characters
    if(lowerCase.checked)
        characters += lowerCaseCharacters;

    if(upperCase.checked)
        characters += upperCaseCharacters;

    if(numbers.checked)
        characters += numberValues;

    if(symbols.checked)
        characters += specialCharacters;

    for(let i = 0; i < passwordLength; i++){
        key += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // setting key to our password input
    passwordInput.value = key;
}

// Setting Listener to our button
document.getElementById("generate-key").addEventListener("click", passwordGenerator);