
 
function getComputerChoice() {

    const options = ["rock", "paper", "scissor"];

    return  (options[Math.floor(Math.random() * options.length)]);
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
   if (playerSelection === "rock") {
        if (computerSelection === "paper") {
           ++computerScore;
       } else if (computerSelection === "scissor") {
            ++playerScore;
        } else if (computerSelection === "rock") {
            console.log("its a tie")
        }
    }
        
    else if (playerSelection === "paper") {
         if (computerSelection === "rock") {
        ++playerScore
        } else if (computerSelection === "scissor") 
         ++computerScore
        } else if (computerSelection === "paper") {
            console.log("its a tie")
    }
    
    else if  (playerSelection === "scissor") {
        if (computerSelection === "rock"){
            ++computerScore
        } else if (computerSelection === "paper") {
            ++playerScore
    } else if (computerSelection === "scissor") {
        console.log("its a tie")
    }
}

if (computerScore >= 5) {
    console.log("computer is winner")
} else if (playerScore >= 5) {
    console.log("player is the winner")
}
}


function scoreboard(playerScore, computerScore) {
    let pScore = playerScore;
    let cScore = computerScore;
    return pScore + ":" + cScore;
}


const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;

    playRound(playerSelection, getComputerChoice());
    content.textContent = scoreboard(playerScore, computerScore);
    pscore.textContent = (playerScore);
    cscore.textContent = (computerScore);   
});
});

const scores = document.querySelector('#scores');
    const content = document.createElement('div');
    content.classList.add('content');
    scores.appendChild(content);


const pScore = document.querySelector('#pScore');
const pscore = document.createElement('div')
    pscore.classList.add('pscore');
    pScore.appendChild(pscore);

const cScore = document.querySelector('#cScore');
const cscore = document.createElement('div')
    cscore.classList.add('pscore');
    cScore.appendChild(cscore);









