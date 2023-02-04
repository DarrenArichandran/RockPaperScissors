
// need to workout how to choose a random string in the array//
function getComputerChoice() {

    const options = ["rock", "paper", "scissor"];

    return  (options[Math.floor(Math.random() * options.length)]);
}


//below need to to write boolean to work out rock>scissors etc and return a string that declares winner [done!]//

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


    
  
  /*
  console.log(playRound(playerSelection, computerSelection));
  console.log(computerSelection);
  console.log(computerSelection + (" ,") + playerSelection + (" ,") + playerSelection1);
*/

function game() {
      for  (let round = 1; round <= 5; round++){
       
    const playerSelection1 = prompt("Make your choice; rock,paper or scissor?");
    let playerSelection = (playerSelection1).toLowerCase();
    let computerSelection = getComputerChoice();

       playRound(playerSelection, computerSelection)
     console.log("Player" + " " + playRound(playerSelection, computerSelection));

// score above is being stored once increased - need to look at possibly using an array to call value once score icreases? 
//[done!] answer was way more simple, have score update outside of function //

if (playRound(playerSelection, computerSelection) === "win") {
    playerScore++
} else if (playRound(playerSelection, computerSelection) === "lose" ) {
    computerScore++
}
console.log( playerScore + " : " + computerScore)

    }
    if (playerScore > computerScore) {
        console.log("player is the winner");
    } else if (playerScore < computerScore) {
        console.log("computer is the winner"); 
    } else {
        console.log("its a tie")
    }
}

let playerScore = 0;
let computerScore = 0; 
console.log(game())








  