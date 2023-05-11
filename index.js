const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let round = 1;  

const btns = document.querySelectorAll('button');
const h2selection = document.querySelector('h2');
 
//buttonclick is playerselection and then plays game
// for (i of btns) {
//     i.addEventListener('click', (e) => {
//         console.log(e.target);
//         playerSelection = (e.);
//         if (round < 6) {
//             playGame();
//             round++;
//             }
//     });
// } 


function play(rockpaperscissors) {
    console.log(rockpaperscissors);
    playerSelection = (rockpaperscissors);
    if (round < 6) {
        playGame();
        round++;
    }
}

////function for capitalizing first letter
// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUppercase() + string.slice(1);
// }

//get computer choice
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

//update scoreboard
function updateScoreboard(playerScore, computerScore) {
    document.querySelector('.player_score').textContent = playerScore;
    document.querySelector('.computer_score').textContent = computerScore;
    document.querySelector('.round').textContent = round;
}


function playGame () {
    const computerSelection = getComputerChoice(); 
    playRound(playerSelection, computerSelection);
    updateScoreboard(playerScore, computerScore);

    const selection = document.querySelector('.selection');
    const dispchoices = document.querySelector('.dispchoices');
        const p1selection = document.createElement('p1');
        p1selection.className = "pselection";
            const nodep1 = document.createTextNode(round + ":  " + "You chose: " + playerSelection);
        const p2selection = document.createElement('p2');
            const nodep2 = document.createTextNode("Computer chose: " + computerSelection);
        p2selection.className = "pselection";
        const vsselection = document.createElement('p3');
            const nodevs = document.createTextNode("vs.");
        vsselection.className = "pselection";
        p1selection.appendChild(nodep1);
        vsselection.appendChild(nodevs)
        p2selection.appendChild(nodep2);
    dispchoices.appendChild(p1selection);
    dispchoices.appendChild(vsselection);
    dispchoices.appendChild(p2selection);
        const pfinalresult = document.createElement('h2');
    
    if (round === 5) {
        selection.appendChild(pfinalresult);
        if (playerScore > computerScore) {
            pfinalresult.textContent = "Congratulations, you have won!" + " (" + playerScore + " - " + computerScore + ")";
        } else if (playerScore < computerScore) {
            pfinalresult.textContent = "Too bad, you lost against the computer." + " (" + playerScore + " - " + computerScore + ")";
        } else {
            pfinalresult.textContent = "You tied the computer!" + " (" + playerScore + " - " + computerScore + ")";
        }
    }

    console.log(playerSelection);
    console.log(computerSelection);
    console.log("Round: " + round);
    console.log("You chose: " + playerSelection + "    Computer chose: " + computerSelection);
    console.log("Your score is: " + playerScore + "    The computer's score is: " + computerScore);
    console.log("---------------------------------------------------");
}

//play one round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        h2selection.textContent = "It's a draw!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
       computerScore ++
       h2selection.textContent = "You Lose! Paper beats Rock.";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore ++
        h2selection.textContent = "You Win! Rock beats Scissors.";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore ++
        h2selection.textContent = "You Lose! Scissors beats Paper.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore ++
        h2selection.textContent = "You Win! Paper beats Rock.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore ++
        h2selection.textContent = "You Lose! Rock beats Scissors.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore ++
        h2selection.textContent = "You Win! Scissors beats Paper.";
    }
}