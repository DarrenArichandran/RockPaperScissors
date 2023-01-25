
// need to workout how to choose a random string in the array//
function getComputerChoice() {

    const options = ["rock", "paper", "scissors"];

    return  options[Math.floor(Math.random() * options.length)];
}

console.log(getComputerChoice())

//below need to to write boolean to work out rock>scissors etc and return a string that declares winner//
/*function playRound(playerSelection, computerSelection) {
    if playerSelection>computerSelection
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));*/
  

