choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
const random = Math.floor(Math.random() * choices.length)
return(choices[random]);
}

//console.log(getComputerChoice())

let playerPrompt = prompt("Select one: rock, paper, scissor");

let selection = playerPrompt.toLowerCase()

function getPlayerSelection(selection) {
    if (selection === "rock") {
            return("rock");
            } else if (selection === "paper") {
            return("paper");
            } else if (selection === "scissor") {
            return("scissor");
            } else {
            return("invalid");
            }
        }

console.log(getPlayerSelection(selection))

let computerSelection = getComputerChoice();
//console.log(computerSelection)
// Tested! it works!

let playerSelection = selection;
//console.log(playerSelection)
// Tested. It also works!

function playRound(a, b) {
    if (a == "rock" && b == "rock") {
    return "tie!";
    } else if (a == "rock" && b == "paper") {
    return "You lose!";
    } else if (a == "rock" && b == "scissor") {
    return "You win!";
    } else if (a == "paper" && b == "rock") {
    return "You win!";
    } else if (a == "paper" && b == "paper") {
    return "Tie!"
    } else if (a == "paper" && b == "scissor") {
    return "You Lose!"
    } else if (a == "scissor" && b == "rock") {
    return "You lose!"
    } else if (a == "scissor" && b == "paper") {
    return "You win!"
    } else if (a == "scissor" && b == "scissor") {   
    return "Tie!" 
    } else if (a == "invalid" && b == "rock") {
    return "Not valid"       
    } else if (a =="invalid" && b == "paper") {
    return "Not valid" 
    } else (a=="invalid" && b == "scissors") 
    return "Not valid" 
}

console.log(playRound(playerSelection, computerSelection))