
// need to workout how to choose a random string in the array//
function getComputerChoice() {

    const options = ["rock", "paper", "scissor"];

    return  (options[Math.floor(Math.random() * options.length)]);
}


//below need to to write boolean to work out rock>scissors etc and return a string that declares winner//

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

    else (playerSelection === "scissor") 
        if (computerSelection === "rock"){
            return "lose"
        } else if (computerSelection === "paper") {
            return "win"
        } else (computerSelection === "scissor") 
            return "tie" 
        
} 
  const playerSelection1 = prompt("Make your choice; rock,paper or scissor?");
  const playerSelection = (playerSelection1).toLowerCase();
  let computerSelection = getComputerChoice();
  
  console.log(playRound(playerSelection, computerSelection));
  console.log(computerSelection);
  console.log(computerSelection + (" ,") + playerSelection + (" ,") + playerSelection1);