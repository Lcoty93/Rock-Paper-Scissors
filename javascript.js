let promptPlayer;
let playerSelection;
let computerSelection;
let robotWins = 0;
let playerWins = 0;

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    console.log(randomNumber);

    if (randomNumber === 1){
        return "ROCK";
    } else if (randomNumber === 2) {
        return "PAPER";
    } else if (randomNumber === 3){
        return "SCISSOR";
    }
}



function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection){
        return "DRAW!";
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        robotWins += 1;
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
        playerWins += 1;
        return "You win! Rock beats Scissor";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerWins += 1;
        return "You win! Paper beats Rock";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
        robotWins += 1;
        return "You lose! Scissor beats Paper";
    } else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
        robotWins += 1;
        return "You lose! Rock beats Scissor";
    } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
        playerWins += 1;
        return "You win! Scissor beats Paper";
    }

}

function game() {

    for(let i = 0; i < 5; i++){
        promptPlayer = prompt("Enter Rock, Paper, or Scissor: ");
        playerSelection = promptPlayer.toUpperCase();
        computerSelection = computerPlay();

        
        console.log(playRound(playerSelection, computerSelection));
        console.log("Robot wins: " + robotWins);
        console.log("Your wins: " + playerWins);
        
    }

    if(playerWins > robotWins){
        console.log("Out of 5 games,")
        console.log("You won the game!");
    } else {
        console.log("Out of 5 games,")
        console.log("Robot won the game!");
    }

}

game();
