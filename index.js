const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let round = 1;  

//get computer choice
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

//get player choice
function getPlayerchoice() {
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock, Paper or Scissors?");
        if(choice == null) {
            continue; 
        }
        const choiceInLower = choice.toLowerCase();
        if(choices.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

//play one round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
       round ++
       return "It's a draw!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
       computerScore ++, round++
       return "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore ++, round++
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore ++, round++
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore ++, round++
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore ++, round++
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore ++, round++
        return "You Win! Scissors beats Paper";
    } else {
        return "Typing mistake?";
    }
}

//play a game consisting of 5 rounds
function game() {
    console.log("Welcome to Rock, Paper, Scissors!");
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerchoice();
        const computerSelection = getComputerChoice(); 
        console.log("Round: " + round);
        console.log("You chose: " + playerSelection + "    Computer chose: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your score is: " + playerScore + "    The computer's score is: " + computerScore);
        console.log("---------------------------------------------------");
    }
    if (playerScore > computerScore) {
        return "Congratulations, you have won!" + " (" + playerScore + " - " + computerScore + ")";
    } else if (playerScore < computerScore) {
        return "Too bad, you lost against the computer." + " (" + playerScore + " - " + computerScore + ")";
    } else {
        return "You tied the computer!" + " (" + playerScore + " - " + computerScore + ")";
    }
}

console.log(game());