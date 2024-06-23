function checkString(){
    let input = document.getElementById("textInput").value;

    // checking input whether it contains alphabets
    if(!/^[a-zA-Z\s]+$/.test(input)){
        alert("please enter an alphabetic characters. (Numbers, Symbols are not included.)");
        return;
    }

    let vowelCount = 0;
    let consonantCount = 0;

    input = input.toLowerCase();
    for(let i = 0; i < input.length; i++){
        let char = input.charAt(i);

        // condition checking
        if(isVowel(char)){
            vowelCount++;
        }
        else{
            consonantCount++;
        }
    }
    let result = document.getElementById("result");
    result.textContent = `Vowel Count: ${vowelCount}, Consonant Count: ${consonantCount}`; 

    document.getElementById("reset-btn").style.display = "block";
}

function isVowel(char){
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char.toLowerCase());
}


function resetBtn(){
    // Clearing all input fields
    document.getElementById("textInput").value = "";

    // Clearing result
    document.getElementById("result").innerHTML = "";
    document.getElementById("reset-btn").style.display = "none";
}