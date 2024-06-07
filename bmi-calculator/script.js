document.getElementById("members").addEventListener("submit", calculateBMI)

function calculateBMI(){
    // preventing the default form submission bheaviour
    event.preventDefault();

    const gender = document.getElementById("gender-selection").value;
    const age = parseInt(document.getElementById("age").value);
    const height_in_feet = parseInt(document.getElementById("height-in-feet").value);
    const height_in_inches = parseInt(document.getElementById("height-in-inches").value);
    const weight = parseFloat(document.getElementById("weight-in-kg").value);

    if(gender && age && height_in_feet && height_in_inches && weight){
        const height_in_meters = ((height_in_feet * 12) + height_in_inches) * 0.0254; // height in meters

        // calculate the bmi
        const bmi = weight / (Math.pow(height_in_meters, 2));
        const result = document.getElementById("result");

        // displaying the category based on the bmi
        let category = "";
        if(bmi < 18.5) category = "Under Weight";
        else if(bmi >= 18.5 && bmi < 24.9) category = "Normal Weight"
        else if(bmi >= 24.9 && bmi < 29.9) category = "Over Weight";
        else category = "Obese";

        // displaying result
        let mssg = "Your BMI is: " + bmi.toFixed(2) + "<br>";
        mssg += "You will fall under " + category + " category.";

        result.innerHTML = mssg;

        document.getElementById("reset-btn").style.display = "block";
    }
}

document.getElementById("reset-btn").addEventListener("click", () => {
    document.getElementById("age").value = "";
    document.getElementById("height-in-feet").value = "";
    document.getElementById("height-in-inches").value = "";
    document.getElementById("weight-in-kg").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("reset-btn").style.display = "none";
});