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
  else{
    return "scissors";
  }  
}
console.log(getComputerChoice());

//function to take user input
function getHumanChoice(){
  return (prompt("rock,paper,scissors?", '')).toLowerCase();
}
console.log(getHumanChoice());
//score variable
  let humanScore = 0;
  let computerScore = 0;

  //function that compares user's input and computer choice to give the desired result
  function playRound(humanChoice, computerChoice){
    if(humanChoice===computerChoice){
      console.log('this is a draw');
      return "draw";

    }
    else if (humanChoice==="paper" && computerChoice==="rock" ||
            humanChoice==="rock" && computerChoice==="scissors" ||
            humanChoice==="scissors" && computerChoice==="paper"){
              console.log("you win");
              humanScore++;
              return "you win";
    }
    else{
      console.log("you lose");
      computerScore++;
      return "you lose";
    }

  }


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

