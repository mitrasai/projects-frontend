let scoreInStorage = localStorage.getItem('Score');
let score = JSON.parse(scoreInStorage) || {
  win : 0,
  lost : 0,
  tie : 0,
};

// if(scoreInStorage !== undefined){
//   score = JSON.parse(scoreInStorage);
// }
// else{
//   score = {
//     win : 0,
//     lost : 0,
//     tie : 0,
//   };
// }

score.display = function(){
  return `Win:${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
};

function generateComputerChoice(){
  let randomNumber = Math.random() * 3;

  // Determine the computer's choice
  if(randomNumber > 0 && randomNumber <= 1) return 'Bat';
  else if(randomNumber > 1 && randomNumber <= 2) return 'Ball';
  else return 'Stump';
}

function getResult(userMove,computerMove){
  if(userMove === 'Bat') {
    if(computerMove === 'Ball'){
      score.win++;
      return 'You have won.';
    }
    else if(computerMove === 'Bat') {
      score.tie++;
      return 'Draw!';
    }
    else {
      score.lost++;
      return 'You have lost.';
    }
  } 
  else if(userMove === 'Ball') {
    if(computerMove === 'Ball') {
      score.tie++;
      return 'Draw!';
    }
    else if(computerMove == 'Bat') {
      score.lost++;
      return 'You have lost.';
    }
    else {
      score.win++;
      return 'You have won.';
    }
  } 
  else {
    if(computerMove === 'Ball') {
      score.lost++;
      return 'You have lost.';
    }
    else if(computerMove === 'Bat') {
      score.win++;
      return 'You have won.';
    }
    else {
      score.tie++;
      return 'Draw!';
    }
  }
}

function showResult(userMove, computerMove, getResult){
  // storage for score
  localStorage.setItem('Score', JSON.stringify(score));


  document.querySelector('#user-move').innerText = `You have choosen ${userMove}.`;
  document.querySelector('#computer-move').innerText = `Computer choice is ${computerMove}.`;
  document.querySelector('#result').innerText = `Result: ${getResult}`;
  document.querySelector('#score').innerText = `${score.display()}`;
}