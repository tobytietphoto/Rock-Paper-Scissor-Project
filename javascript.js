 const choices = ["rock", "paper", "scissor"];

 function getComputerChoice() {
  let random = Math.floor(Math.random() * choices.length); 
  return choices[random]
}

function getUserChoice() {
  let userPrompt = prompt("Input one: rock, paper, scissor");
  while(!choices.includes(userPrompt)||(userPrompt == null)) {
    return getUserChoice(userPrompt)
  }
  return userPrompt;
}

let userScore = 0;
let compScore = 0;

function playRound(a, b) {
  if(a == b) {
    return "tie"
  } else if (
    (a == "rock" && b == "scissor") ||
    (a == "paper" && b == "rock") ||
    (a == "scissor" && b == "paper")) {
    userScore++
    console.log(`user currently has ${userScore} points.`)
    return "win"
  } else {
    compScore++
    console.log(`Computer currently has ${compScore} points.`)
    return "lose"
  }
}

//console.log(playRound(getUserChoice(), getComputerChoice()))

function playFiveRounds() {
  for (let i = 0; i <= 5; i++) {
  let user = getUserChoice();
  let computer = getComputerChoice();
  playRound(user, computer)
  }

  if (userScore > compScore) {
      console.log(`User wins with ${userScore} points!`)
  } else if (compScore > userScore) {
      console.log(`Computer wins with ${compScore} points!`)
  } else {
      console.log(`Its a tie!`)
  }
}

console.log(playFiveRounds())