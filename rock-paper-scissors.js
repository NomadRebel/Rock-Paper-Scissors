console.log("Hello World!");
//project to create rock paper scissors.
//it will be a interactive project
//for that i need to make generate random output of the three.
function getComputerChoice(){ //this function will generate random values that are less than 1 and equals to zero
  const a = Math.random()*10;
  if (a<=3){
    return 'rock';
  }
  else if (a<7){
    return 'paper';
  }
  else{
    return 'scissors';
  }
} 
const random = getComputerChoice();

//and also take user's input or make a button like thing so a user can press it. Depends on instructions of odin.
 //this function will take the human's choice.
function getHumanChoice(){ 
  const a = window.prompt("Type your choice", '');
  const b =  a.toLowerCase();
  return b;
}
const human = getHumanChoice();

// now i need to declare score function that initialize with 0 but increase by one whoever wins the round.l
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("You win!");
    humanScore++;
    return "win";
  } else {
    console.log("You lose!");
    computerScore++;
    return "lose";
  }
}
for (let i=0; i<5; i++){
const humanSelection = human;
const computerSelection = random;

playRound(humanSelection, computerSelection);
}