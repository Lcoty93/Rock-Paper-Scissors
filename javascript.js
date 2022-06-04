let promptPlayer;
let playerSelection;
let computerSelection;
let robotWins = 0;
let playerWins = 0;

// EVENT LISTENERS**********
const rock = document.querySelector('#rock');
rock.onclick = () => playRound("ROCK", computerPlay());

const paper = document.querySelector('#paper');
paper.onclick = () => playRound("PAPER", computerPlay());

const scissor = document.querySelector('#scissor');
scissor.onclick = () => playRound("SCISSOR", computerPlay());

const reset = document.querySelector('#reset');
reset.style.display = "none";
reset.onclick = () => playAgain();


// DOM manipulation

const container = document.querySelector('#result');
const content = document.createElement('h1');

const container2 = document.querySelector('#score');
const content2 = document.createElement('h3');





function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3) + 1;

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
        content.textContent = 'DRAW!';
        container.appendChild(content);
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        robotWins += 1;
        content.textContent = 'You lose! Paper beats Rock!';
        container.appendChild(content);
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
        playerWins += 1;
        content.textContent = 'You win! Rock beats Scissor';
        container.appendChild(content);
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerWins += 1;
        content.textContent = 'You win! Paper beats Rock';
        container.appendChild(content);
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
        robotWins += 1;
        content.textContent = 'You lose! Scissor beats Paper';
        container.appendChild(content);
    } else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
        robotWins += 1;
        content.textContent = 'You lose! Rock beats Scissor';
        container.appendChild(content);
    } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
        playerWins += 1;
        content.textContent = 'You win! Scissor beats Paper';
        container.appendChild(content);
    }

    content2.textContent = `Your score: ${playerWins} Robot score: ${robotWins}`;
    container2.appendChild(content2);

    if(playerWins === 5){
        content.textContent = 'You won the game!';
        container.appendChild(content);
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
        reset.style.display = "block";
    } else if (robotWins === 5) {
        content.textContent = 'You lost the game!';
        container.appendChild(content);
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
        reset.style.display = "block";
    }
}

function playAgain() {
    robotWins = 0;
    playerWins = 0;

    content2.textContent = `Your score: ${playerWins} Robot score: ${robotWins}`;
    container2.appendChild(content2);

    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
    reset.style.display = "none";
}