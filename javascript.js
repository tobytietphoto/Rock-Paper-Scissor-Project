let pick = ["rock", "paper", "scissors"];

function getComputerChoice() {
 const random = Math.floor(Math.random() * pick.length);
 console.log(pick[random]);
};

let choice = prompt("Pick one: rock paper scissor").toLowerCase()

    if  (choice === "rock") {
        console.log("rock");
        } else if (choice === "paper") {
        console.log("paper");
        } else if (choice === "scissors") {
        console.log("scissor");
        } else {
        console.log("invalid");
        }

function game(choice, getComputerChoice) {
    if ("rock" && "rock") {
        alert("Tie!");
    } else if ("rock" && "paper") {
        alert("Sorry, you loss!");
    } else if ("rock" && "scissor") {
        alert("Congrats! you win!");
    } else if ("paper" && "rock") {
        alert("Congrats! you win!");
    } else if ("paper" && "paper") {
        alert("Tie!");
    } else if ("paper" && "scissor") {
        alert("Sorry, you loss!");
    } else if ("scissor" && "rock") {
        alert("Congrats! You win!");
    } else if ("scissor" && "paper") {
        alert("Sorry, you loss!");
    } else if ("scissor" && "scissor") {
        alert("Tie");
    }
}

console.log(game(choice, getComputerChoice))