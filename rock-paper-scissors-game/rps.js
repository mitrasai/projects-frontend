let score = {
  win : 0,
  lost : 0,
  tie : 0,
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

 alert(`You have chosen ${userChoice}.\nComputer chose ${computerChoice}.\n${result}\nWin:${score.win}, Lost:${score.lost}, Tie:${score.tie}`);
}