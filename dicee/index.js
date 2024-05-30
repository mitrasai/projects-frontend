
// let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
// let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
// let randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
// let image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", randomImageSource);


function rollDice(){
    // Generating random numbers to roll the dices
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Setting image sources based on the random numbers
    const randomImageSource1 = "images/dice" + randomNumber1 + ".png";
    const randomImageSource2 = "images/dice" + randomNumber2 + ".png";

    // Changing attributes of image element
    document.querySelector(".img1").setAttribute("src", randomImageSource1);
    document.querySelector(".img2").setAttribute("src", randomImageSource2);
    document.querySelector(".info").style.display = "none";

    // Determining the winner
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    }   
    else if(randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
    } 
}