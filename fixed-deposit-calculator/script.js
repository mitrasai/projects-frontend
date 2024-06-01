function calculateMaturityAmount(){

    // Getting inputs
    const principle = parseFloat(document.getElementById("principle").value);
    const interestRate = parseFloat(document.getElementById("interest").value);
    const tenure = parseFloat(document.getElementById("tenure").value);

    //validating if the entered values are numbers or not
    if(isNaN(principle) || isNaN(interestRate) || isNaN(tenure)){
        alert("Please enter values in all fields");
        return;
    }    

    // Performing calculations
    const maturityAmount = principle + ((principle * interestRate * tenure) / 100);

    // Displaying the result
    document.querySelector(".total-value").innerHTML = `Maturity Amount is: ${maturityAmount.toFixed(2)}`;
    document.getElementById("reset-btn").style.display = "block";
}

// Another way:
// Attaching event listener to calculate button
// document.getElementById("btn-calculate").addEventListener("click", calculateMaturityAmount);

function resetForm(){
    
    // Clearing all input fields
    document.getElementById("principle").value = "";
    document.getElementById("interest").value = "";
    document.getElementById("tenure").value = "";

    // Clearing result
    document.querySelector(".total-value").innerHTML = "";
    document.getElementById("reset-btn").style.display = "none";
}

// Attaching listener to reset button
// document.getElementById("reset-btn").addEventListener("click", resetForm);