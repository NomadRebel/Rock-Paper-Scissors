console.log('Hello World');
//let's get this started again...
// First,i need to make a function that generates random output and convert it into rock paper and scissors
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
//for this math.random can help me and then by conditionals i can convert it into the desired output 
//then i need to take the user's input and make it case insensitive.
function getHumanChoice(){
  return (prompt("rock,paper,scissors?", '')).toLowerCase();
}
console.log(getHumanChoice());
// then i need to declare score variable
  let humanScore = 0;
  let computerScore = 0;

  //after that i need to make the function that can analyze the human input and computer's choice and declare the result
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
// and i need to play this game five times
