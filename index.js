const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let round = 1;  

const h2selection = document.querySelector('h2');
const selection = document.querySelector('.selection');
const pfinalresult = document.createElement('h3'); 
 
function play(rockpaperscissors) {
    playerSelection = (rockpaperscissors);
    if (round < 6) {
        playGame();
        round++;
    }
}

// function leaderBold() {
//         document.getElementsByName('p1').style.fontWeight = "bold";
// }

// //function for capitalizing first letter
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
    document.querySelector('.round').textContent = round + "/5";
}


function playGame () {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScoreboard(playerScore, computerScore);

    function capPlayer(string) {
        var str = playerSelection;
        var capplayerSelection = str.charAt(0).toUpperCase() + str.slice(1);
        return capplayerSelection;
    }
    
    function capComputer(string) {
        var str2 = computerSelection;
        var capcomputerSelection = str2.charAt(0).toUpperCase() + str2.slice(1);
        return capcomputerSelection;  
    }
    
    function insRow() {
        var table = document.getElementById("tablechoices");
        var row = table.insertRow(round);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = round;
        cell2.innerHTML = capPlayer(playerSelection);
        cell3.innerHTML = capComputer(computerSelection);
    }
    insRow();
    
    if (round === 5) {
        selection.appendChild(pfinalresult);
        if (playerScore > computerScore) {
            pfinalresult.textContent = "Congratulations, you have won!" + " (" + playerScore + " - " + computerScore + ")";
        } else if (playerScore < computerScore) {
            pfinalresult.textContent = "Too bad, you lost against the computer." + " (" + playerScore + " - " + computerScore + ")";
        } else {
            pfinalresult.textContent = "You tied the computer!" + " (" + playerScore + " - " + computerScore + ")";
        }
        setTimeout(playAnother, 5000, pfinalresult.textContent);
    }

    function playAnother(string) {
        if (confirm(string + "\nDo you want to play another game?") == true) {
            location.reload();
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