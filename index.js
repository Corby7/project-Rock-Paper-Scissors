const choices = ["rock", "paper", "scissors"];

//get computer choice
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return ("It's a draw!");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
       return "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
    
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));