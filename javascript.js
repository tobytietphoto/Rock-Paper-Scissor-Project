let choices = ["rock", "paper", "scissors"]
// An array that contains 3 strings - rock paper scissors

function getComputerChoice() {
 const random = Math.floor(Math.random() * choices.length);
 console.log(choices[random]);
}
/* A function that contains a variable that will round down with
.random method. The .random method only uses number between 0 to 1
which include decimals. The index of the variable choices will 
multiply with .random numbers so this will result between 0 to 2.
*/
console.log(getComputerChoice())
// The result will then get loged onto console.

let getPlayerChoice = prompt("Pick one: Rock Paper Scissor");
/* A variable that will bring up a prompt so user can pick between
rock, paper, scissors.
*/
console.log(getPlayerChoice);