console.log('Hello World');
// function that generates random values
function getComputerChoice(){
  let a = Math.floor(Math.random() * 3);
  if (a===0){
    return "rock";
  }
  else if (a===1){
    return "paper";
  }
  else if (a===2){
    return "scissors";
  }  
}

  //function to take user input
  function getHumanChoice(){
    return (prompt("rock,paper,scissors?", '')).toLowerCase();
  }
  //score variable
    let humanScore = 0;
    let computerScore = 0;

    //function that compares user's input and computer choice to give the desired result
    function playRound(humanChoice, computerChoice){
      if(humanChoice === computerChoice){
        humanScore++;
        return "draw";
      }
      else if (humanChoice === "paper" && computerChoice==="rock"){
        humanScore++;
        return "win";
      }
      else if (humanChoice === "rock" && computerChoice==="scissors"){
        humanScore++;
        return "win"
      }

      else if (humanChoice === "scissors" && computerChoice==="paper"){
        return "Tie";
      }
      else{
        computerScore++;
        return "lose";
      }
    }
function playGame(){
  for(let round = 0; round <5; round++){
      let humanSelection = getHumanChoice();
      console.log(humanSelection);
      let computerSelection = getComputerChoice();
      console.log(computerSelection);
      playRound(humanSelection, computerSelection);
  }
  if (humanScore>computerScore) {
    console.log("you win");
  }
  else {
    console.log("you lose");
  }
  console.log("humanScore "+humanScore);
  console.log("computerScore "+computerScore);
}
  let playedGame = playGame();
  console.log(playedGame);