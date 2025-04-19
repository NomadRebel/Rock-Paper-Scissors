// first let's declare the random number function then I'll call the function when button is clicked

function getComputerChoice(){
  let randomNumber = Math.floor(Math.random()*3)
  if (randomNumber === 0){
    return "rock";
  }
  else if (randomNumber === 1){
    return "paper";
  }
  else {
    return "scissors";
  }
}
// declaring score variables
let humanScore = 0;
let computerScore = 0;
// adding functions for specific buttons


// playRock will execute when rock button is clicked
function playRock(){
  let a = getComputerChoice();
  let b = "rock";
  let c;
  console.log(a);
  console.log(b);
  if(a===b){
    c =  "draw";
  }
  else if (b === "rock" && a === "scissors"){
    c = "win";
  }
  else{
    c = "lose";
  }
  return c;
};


// playPaper will execute when paper button is clicked
function playPaper(){
  let a = getComputerChoice();
  let b = "paper";
  let c;
  console.log(a);
  console.log(b);
  if(a===b){
    c =  "draw";
  }
  else if (b === "paper" && a === "rock"){
    c = "win";
  }
  else{
    c = "lose";
  }
  return c;
};


// playScissors will execute when scissors button is clicked
function playScissors(){
  let a = getComputerChoice();
  let b = "scissors";
  let c;
  console.log(a);
  console.log(b);
  if(a===b){
    c =  "draw";
  }
  else if (b === "scissors" && a === "paper"){
    c = "win";
  }
  else{
    c = "lose";
  }
  return c;
}

// selecting div id = one from html
const div = document.getElementById("one");

// creating new div with variable name score that will contain the score of the game
const score = document.createElement("div");

// paragraph that will go inside score and display the scores
const pOne = document.createElement("p");
const pTwo = document.createElement("p");


// function for rock button when it is clicked
const rockImg = document.querySelector("#imgRock");
rockImg.addEventListener("click",function(){
  let a = playRock(); 
  if(a==="win"){  // giving condition so it wil match the return value of playRock and increase the humanScore by 1.
    humanScore++;
  }
  else if(a==="draw"){
     humanScore;
     computerScore;
  }
  else {
     computerScore++;
  }
  // checking condition if any of the players scores 5 then it will display the message and reload the page
  if(humanScore===5){
    alert("you won");
    location.reload();
  }
  else if(computerScore===5){
    alert("you lost");
    location.reload();
  }

  // this will create new element in html and add the score variable 
  pOne.textContent = "Your Score: " + humanScore + "/5";
  pTwo.textContent = "Computer Score: " +computerScore + "/5";
  score.appendChild(pOne);
  score.appendChild(pTwo);
  document.body.appendChild(score);
});

const paper = document.querySelector("#paper");
paper.addEventListener("click",function(){
  let a = playPaper();
  if(a==="win"){
    humanScore++;
  }
  else if(a==="draw"){
     humanScore;
     computerScore;
  }
  else {
     computerScore++;
  }
  if(humanScore===5){
    alert("you won");
    location.reload();
  }
  else if(computerScore===5){
    alert("you lost");
    location.reload();
  }
  pOne.textContent = "Your Score: " + humanScore + "/5";
  pTwo.textContent = "Computer Score: " +computerScore + "/5";
  score.appendChild(pOne);
  score.appendChild(pTwo);
  document.body.appendChild(score);
});
const paperImg = document.querySelector("#imgPaper");
paperImg.addEventListener("click",function(){
  let a = playPaper();
  if(a==="win"){
    humanScore++;
  }
  else if(a==="draw"){
     humanScore;
     computerScore;
  }
  else {
     computerScore++;
  }
  if(humanScore===5){
    alert("you won");
    location.reload();
  }
  else if(computerScore===5){
    alert("you lost");
    location.reload();
  }
  pOne.textContent = "Your Score: " + humanScore + "/5";
  pTwo.textContent = "Computer Score: " +computerScore + "/5";
  score.appendChild(pOne);
  score.appendChild(pTwo);
  document.body.appendChild(score);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click",function(){
  let a = playScissors();
  if(a==="win"){
    humanScore++;
  }
  else if(a==="draw"){
     humanScore;
     computerScore;
  }
  else {
     computerScore++;
    }
  
  if(humanScore===5){
    alert("you won");
    location.reload();
  }
  else if(computerScore===5){
    alert("you lost");
    location.reload();
  }

  pOne.textContent = "Your Score: " + humanScore +"/5";
  pTwo.textContent = "Computer Score: " + computerScore + "/5";
  score.appendChild(pOne);
  score.appendChild(pTwo);
  document.body.appendChild(score);
});
const scissorsImg = document.querySelector("#imgScissors");
scissorsImg.addEventListener("click",function(){
  let a = playPaper();
  if(a==="win"){
    humanScore++;
  }
  else if(a==="draw"){
     humanScore;
     computerScore;
  }
  else {
     computerScore++;
  }
  if(humanScore===5){
    alert("you won");
    location.reload();
  }
  else if(computerScore===5){
    alert("you lost");
    location.reload();
  }
  pOne.textContent = "Your Score: " + humanScore + "/5";
  pTwo.textContent = "Computer Score: " +computerScore + "/5";
  score.appendChild(pOne);
  score.appendChild(pTwo);
  document.body.appendChild(score);
});
