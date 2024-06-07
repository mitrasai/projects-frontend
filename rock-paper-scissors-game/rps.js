let scoreInStorage = localStorage.getItem('Score');
let score = JSON.parse(scoreInStorage) || {
  win : 0,
  lost : 0,
  tie : 0,
};

score.display = function(){
  return `Win:${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
};

function playRockPaperScissors(userChoice){
  // Generating a random number
  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = "";

  // Mapping random numbers to computer choice
  if(randomNumber === 0) computerChoice = "rock";
  else if(randomNumber === 1) computerChoice = "paper";
  else computerChoice = "scissors";

  // Comparing user's choice with computer choice
  let result = "";

  if(userChoice === computerChoice) {
    score.tie++; 
    result = "It's a Draw!";
  }
  else if((userChoice === "rock" && computerChoice === "scissors")
  || (userChoice === "paper" && computerChoice === "rock")
 || (userChoice === "scissors" && computerChoice === "paper")) {
  score.win++;
  result = "You Win!";
 }
 else {
  score.lost++;
  result = "You Lost!";
}

// storage for score
localStorage.setItem('Score', JSON.stringify(score));

document.querySelector("#user-choice").innerText = `You have chosen ${userChoice}`;
document.querySelector('#computer-choice').innerText = `Computer chose ${computerChoice}`;
document.querySelector('#result').innerText = result;
document.querySelector('#score').innerText = `${score.display()}`;
}
