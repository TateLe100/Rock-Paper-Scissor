// global variables
let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let userInput = prompt("Rock, Paper, Or Scissors? ").toLowerCase();

  // validation
  while (
    userInput === null ||
    (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors")
  ) {
    userInput = prompt(
      "Invalid choice. Please enter Rock, Paper, or Scissors:"
    ).toLowerCase();
  }
  return userInput;
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

// console.log(humanSelection, computerSelection);
// console.log(playRound(humanSelection, computerSelection));
function playGame(numOfGames) {
  for (let i = 1; i <= numOfGames; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }
}

let numOfGames = parseInt(prompt("How many games would you like to play? "));
playGame(numOfGames);
