document.getElementById("generate-btn").addEventListener("click", calculateAge);

function calculateAge(){
    let dobDate = new Date(document.getElementById("dob-date").value);
    let currentDate = new Date(document.getElementById("current-date").value);

    let years = currentDate.getFullYear() - dobDate.getFullYear();
    let months = currentDate.getMonth() - dobDate.getMonth();
    let days = currentDate.getDate() - dobDate.getDate();

    // checks whether the birth month is later in the year than current's month along with
    // birth date is later in the current month than current's date
    // which implies, the user hasn't had their birthday yet this year
    if(months < 0 || (months === 0 && days < 0)){
        years--;
        months += 12;
    }
    document.getElementById("result").textContent = `Your Age is: ${years} years, ${months} months, ${days} days`;

    document.getElementById("reset-btn").style.display = "block";
}

document.getElementById("reset-btn").addEventListener("click", () => {
    document.getElementById("dob-date").value = "";
    document.getElementById("current-date").value = "";
    document.getElementById("result").textContent = `Your Age is:`;
    document.getElementById("reset-btn").style.display = "none";
});