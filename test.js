// global variables
let humanScore = 0;
let computerScore = 0;

// event listeners for each button
const userRock = document.querySelector("#Rock");
const userPaper = document.querySelector("#Paper");
const userScissor = document.querySelector("#Scissor");

// grab the results div
const results = document.querySelector(".results");

userRock.addEventListener("click", () => {
  // get computer selection
  const computerSelection = getComputerChoice();
  results.textContent = playRound("rock", computerSelection);
  if (humanScore === 5) {
    results.textContent = "YOU WIN";
    userRock.disabled = true;
    userPaper.disabled = true;
    userScissor.disabled = true;
  } else if (computerScore === 5) {
    results.textContent = "YOU LOSE";
    userRock.disabled = true;
    userPaper.disabled = true;
    userScissor.disabled = true;
  }
});
userPaper.addEventListener("click", () => {
  // get computer selection
  const computerSelection = getComputerChoice();
  results.textContent = playRound("paper", computerSelection);
  if (humanScore === 5) {
    results.textContent = "YOU WIN";
    userRock.disabled = true;
    userPaper.disabled = true;
    userScissor.disabled = true;
  } else if (computerScore === 5) {
    results.textContent = "YOU LOSE";
    userRock.disabled = true;
    userPaper.disabled = true;
    userScissor.disabled = true;
  }
});
userScissor.addEventListener("click", () => {
  // get computer selection
  const computerSelection = getComputerChoice();
  results.textContent = playRound("scissors", computerSelection);
  if (humanScore === 5) {
    results.textContent = "YOU WIN";
    userRock.disabled = true;
    userPaper.disabled = true;
    userScissor.disabled = true;
  } else if (computerScore === 5) {
    results.textContent = "YOU LOSE";
    userRock.disabled = true;
    userPaper.disabled = true;
    userScissor.disabled = true;
  }
});

function getComputerChoice() {
  // randomly return string "rock" "paper" "sissor"
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
  if (humanChoice == computerChoice) {
    humanScore++;
    computerScore++;
    return (
      "ITS a TIE" +
      "\n" +
      "Human Score:" +
      humanScore +
      "\n" +
      "Computer Score:" +
      computerScore
    );
  }
  if (humanChoice == "rock") {
    if (computerChoice == "scissors") {
      humanScore++;
      return (
        "Human Win" +
        "\n" +
        "Human Score:" +
        humanScore +
        "\n" +
        "Computer Score:" +
        computerScore
      );
    } else {
      computerScore++;
      return (
        "Computer Win" +
        "\n" +
        "Human Score:" +
        humanScore +
        "\n" +
        "Computer Score:" +
        computerScore
      );
    }
  }
  if (humanChoice == "scissors") {
    if (computerChoice == "paper") {
      humanScore++;
      return (
        "Human Win" +
        "\n" +
        "Human Score:" +
        humanScore +
        "\n" +
        "Computer Score:" +
        computerScore
      );
    } else {
      computerScore++;
      return (
        "Computer Win" +
        "\n" +
        "Human Score:" +
        humanScore +
        "\n" +
        "Computer Score:" +
        computerScore
      );
    }
  }
  if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      humanScore++;
      return (
        "Human Win" +
        "\n" +
        "Human Score:" +
        humanScore +
        "\n" +
        "Computer Score:" +
        computerScore
      );
    } else {
      computerScore++;
      return (
        "Computer Win" +
        "\n" +
        "Human Score:" +
        humanScore +
        "\n" +
        "Computer Score:" +
        computerScore
      );
    }
  }
}
