
 
function getComputerChoice() {

    const options = ["rock", "paper", "scissor"];

    return  (options[Math.floor(Math.random() * options.length)]);
}

function playRound(playerSelection, computerSelection) {
   if (playerSelection === "rock") {
       if (computerSelection === "rock"){
           return "tie"
       } else if (computerSelection === "paper") {
           return "lose"
       } else (computerSelection === "scissor") 
           return "win"
   }

   else if (playerSelection === "paper") {
    if (computerSelection === "rock"){
        return "win"
    } else if (computerSelection === "paper") {
        return "tie"
    } else (computerSelection === "scissor") 
        return "lose" 
    }

    else if  (playerSelection === "scissor") {
        if (computerSelection === "rock"){
            return "lose"
        } else if (computerSelection === "paper") {
            return "win"
        } else (computerSelection === "scissor") 
            return "tie"  
    } else if (playerSelection != "rock" || "paper" || "scissor") {
        return " incorrect input, try again"
    }    
}

const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let result = playRound(playerSelection, getComputerChoice());
        
        const scores = document.querySelector('#scores');

        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = result;
        
        scores.appendChild(content);
    });
  });










