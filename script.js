
// need to workout how to choose a random string in the array//
function getComputerChoice() {

    const options = ["rock", "paper", "scissor"];

    return  options[Math.floor(Math.random() * options.length)];
}

console.log(getComputerChoice())

//below need to to write boolean to work out rock>scissors etc and return a string that declares winner//

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock"){
        if (computerSelection === "scissor") {
            return "win";
        }
        else if (computerSelection === "paper") {
            return "lose";
        }
        else if (computerSelection === "rock") {
            return "draw";
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissor") {
            return "lose";
        }
        else if (computerSelection === "paper") {
            return "draw";
        }
        else if (computerSelection === "rock") {
            return "win";
        }
    }

    if (playerSelection === "scissor"){
        if (computerSelection === "scissor") {
            return "draw";
        }
        else if (computerSelection === "paper") {
            return "win";
        }
        else if (computerSelection === "rock") {
            return "lose";
        }
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  

