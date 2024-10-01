// global variables
let humanScore = 0;
let computerScore = 0;

// event listeners for each button
const userRock = document.querySelector("#rock");
const userPaper = document.querySelector("#paper");
const userScissor = document.querySelector("#scissor");

// add a reset button
const resetBtn = document.querySelector("#reset");

// grab the results div
const results = document.querySelector(".results");

// creating a function to handle user choice better
function handleUserChoice(userChoice) {
  const computerSelection = getComputerChoice();
  results.textContent = playRound(userChoice, computerSelection);
  checkScores();
}

userRock.addEventListener("click", () => handleUserChoice("rock"));
userPaper.addEventListener("click", () => handleUserChoice("paper"));
userScissor.addEventListener("click", () => handleUserChoice("scissors"));

// creating a function to check scores
function checkScores() {
  if (humanScore === 5) {
    results.textContent = "YOU WIN";
    disableButtons();
  } else if (computerScore === 5) {
    results.textContent = "YOU LOSE";
    disableButtons();
  }
}

// creating a function to disable buttons
function disableButtons() {
  userRock.disabled = true;
  userPaper.disabled = true;
  userScissor.disabled = true;
}

function getComputerChoice() {
  // randomly return string "rock" "paper" "scissor"
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore++;
  } else if (humanChoice == computerChoice) {
    humanScore++;
    computerScore++;
  } else {
    computerScore++;
  }
  return "Human: " + humanScore + " - " + " Computer: " + computerScore;
}

// creating a reset function
function reset() {
  humanScore = 0;
  computerScore = 0;
  userRock.disabled = false;
  userPaper.disabled = false;
  userScissor.disabled = false;
  results.textContent = "Rock, Paper, or Scissors?";
}

resetBtn.addEventListener("click", () => reset());
