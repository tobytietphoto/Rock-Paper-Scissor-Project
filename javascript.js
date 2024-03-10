choices = ["rock", "paper", "scissor"]

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length)
    return(choices[random])
}

function playerPrompt() {
    let selection = prompt("Pick one: rock, paper, scissor:")
    selection = selection.toLowerCase();
    if (selection == null) {
        return playerPrompt(selection);
    } else if (!choices.includes(selection)) {
        return playerPrompt(selection);
    }
    return selection;
}

//console.log(playerPrompt())
//Dear lordy jesus christ it works.

function checkWinner(a, b) {
    if(a == b){
    return `tie`;
    } 
    else if (
        (a == "rock" && b == "scissor") ||
        (a == "paper" && b == "rock") ||
        (a == "scissor" && b == "paper")
    ){
        return "player";
    }
    else {
        return "computer";
    }
}
/*
let player = playerPrompt();
let computer = getComputerChoice();
 console.log(checkWinner(player, computer))
 Thank you Jesus! this worked!
 */

let playerScore = 0;
let compScore = 0;
let playerSelection = playerPrompt();
let computerSelection = getComputerChoice();

function playRound() {
    let result = checkWinner(playerSelection, computerSelection);
    if (result == "tie") {
        return "It's a tie!"
    } else if (result == "player") {
        playerScore++
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else if (result == "computer") {
        compScore++
        return `You lose! ${computerSelection} beats ${playerSelection}`
    } else {
        return "invalid"
    }
}
/*
console.log(playRound())
This works too TT_TT
*/


function playToFive() {
    for (let round = 0; round <= 5; round++) {
    playerSelection = playerPrompt();
    computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
    }
    if (playerScore > compScore) {
        console.log("player wins with " + playerScore + " points")
    } else if (compScore > playerScore) {
        console.log("computer wins with " + compScore + " points")
    } else {
        console.log("its a tie!")
    }

}

console.log(playToFive())