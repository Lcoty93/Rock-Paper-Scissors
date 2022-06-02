let playerSelection = prompt("Enter Rock, Paper, or Scissor: ");
let computerSelection;

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    console.log(randomNumber);

    if (randomNumber === 1){
        computerSelection = "Rock";
    } else if (randomNumber === 2) {
        computerSelection = "Paper";
    } else if (randomNumber === 3){
        computerSelection = "Scissor";
    }
}
computerPlay()
function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        console.log("DRAW!");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You lose! Paper beats Rock");
    } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
        console.log("You win! Rock beats Scissor");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You win! Paper beats Rock");
    } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
        console.log("You lose! Scissor beats Paper");
    } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
        console.log("You lose! Rock beats Scissor");
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        console.log("You win! Scissor beats Paper");
    }

}

playGame(playerSelection, computerSelection);