console.log("Hello World!");
//project to create rock paper scissors.
//it will be a interactive project
//for that i need to make generate random output of the three.
function getComputerChoice(){//this function will generate random values that are less than 1 and equals to zero
  return Math.random()*10;
}  
if (getComputerChoice < 3){  //i can make a if else statement like so that a particualar condition returns a string of rocks paper and scissor
  console.log("Rock");
}
else if (getComputerChoice >3 && getComputerChoice<8){
  console.log('paper');
}
else{
  console.log('scissors');
}

console.log(getComputerChoice());


//and also take user's input or make a button like thing so a user can press it. Depends on instructions of odin.
 //this function will take the human's choice.
function getHumanChoice(){ return window.prompt("Type your choice", '');}
console.log(getHumanChoice());
//player score variable
let humanScore = 0;
let computerScore = 0;