/* IMPLEMENTATION */
/* - game consists of two players , computer and the user .*/

/* - computer will  output out a random choice at the count of 4 ( rock, paper, scissors,shoot) and the user will have to press enter at the same time.
   - will use math.random unction to output values 1,2,3
   - if output is 1 then computerChoice will be rock
   - if output is 2 then computerChoice will be paper
   - if output is 3 then computerChoice will be scissors. */
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice == 1) {
    return "rock";
  } else if (computerChoice == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

/* - if one player chooses rock and the other user chooses scissors, then the player who chose rock will get a point.
  - if one player chooses rock and the other user chooses paper, then the player who chose paper will get a point.
  - if one player chooses paper and the other user chooses scissors, then the player who chose scissors get a point.
  - if both the players have the same choice then no one gets a point. */
function playRound(playerSelection, computerSelection) {
  choiceResultContainer.insertBefore(catImage, choiceResultDiv);

  if (!(playerScore == 5 || computerScore == 5)) {
    computerSelection = getComputerChoice();

    if (this.classList.value == "rock") {
      playerSelection = "rock";
    }
    if (this.classList.value == "paper") {
      playerSelection = "paper";
    }
    if (this.classList.value == "scissors") {
      playerSelection = "scissors";
    }

    compChoice.textContent = `Computer's choice is ${computerSelection}`;
    playerChoice.textContent = `Your choice is ${playerSelection}`;
    choiceDisplay.appendChild(compChoice);
    choiceDisplay.appendChild(playerChoice);

    //both players choose same value
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
      conclusion.textContent = "It's a tie.";
      choiceResultDiv.appendChild(conclusion);
    }

    //one player chooses rock and the other chooses scissors ,the one who chose rock will win
    else if (
      (playerSelection.toUpperCase() == "ROCK" ||
        playerSelection.toUpperCase() == "SCISSORS") &&
      (computerSelection.toUpperCase() == "ROCK" ||
        computerSelection.toUpperCase() == "SCISSORS")
    ) {
      if (playerSelection.toUpperCase() == "ROCK") {
        conclusion.textContent = "Player won this round.";
        choiceResultDiv.appendChild(conclusion);
        ++playerScore;
      } else {
        conclusion.textContent = "Computer won this round";
        choiceResultDiv.appendChild(conclusion);
        ++computerScore;
      }
    }

    //one player chooses rock and the other  chooses paper ,the one who chose paper will win
    else if (
      (playerSelection.toUpperCase() == "ROCK" ||
        playerSelection.toUpperCase() == "PAPER") &&
      (computerSelection.toUpperCase() == "ROCK" ||
        computerSelection.toUpperCase() == "PAPER")
    ) {
      if (playerSelection.toUpperCase() == "PAPER") {
        conclusion.textContent = "Player won this round.";
        choiceResultDiv.appendChild(conclusion);
        ++playerScore;
      } else {
        conclusion.textContent = "Computer won this round";
        choiceResultDiv.appendChild(conclusion);
        ++computerScore;
      }
    }

    //one player chooses paper and the other  chooses scissors ,the one who chose scissors will win
    else if (
      (playerSelection.toUpperCase() == "SCISSORS" ||
        playerSelection.toUpperCase() == "PAPER") &&
      (computerSelection.toUpperCase() == "SCISSORS" ||
        computerSelection.toUpperCase() == "PAPER")
    ) {
      if (playerSelection.toUpperCase() == "SCISSORS") {
        conclusion.textContent = "Player won this round.";
        choiceResultDiv.appendChild(conclusion);
        ++playerScore;
      } else {
        conclusion.textContent = "Computer won this round";
        choiceResultDiv.appendChild(conclusion);
        ++computerScore;
      }
    }
    score.removeChild(compScore);
    score.removeChild(plyScore);
    compScore.textContent = `Computer: ${computerScore}`;
    plyScore.textContent = `Player: ${playerScore}`;
    score.appendChild(compScore);
    score.appendChild(plyScore);
    console.log(`Computer: ${computerScore}`);
    console.log(`Player: ${playerScore}`);
  } else if (playerScore == 5) {
    choiceDisplay.removeChild(compChoice);
    choiceDisplay.removeChild(playerChoice);
    choiceResultDiv.removeChild(conclusion);
    finalResult.textContent = "You won!! Computer lost!! ";
    choiceResultDiv.appendChild(finalResult);
    choiceResultDiv.appendChild(playAgainButton);
  } else {
    choiceDisplay.removeChild(compChoice);
    choiceDisplay.removeChild(playerChoice);
    choiceResultDiv.removeChild(conclusion);
    finalResult.textContent = "Computer won!! You lost!! ";
    choiceResultDiv.appendChild(finalResult);
    choiceResultDiv.appendChild(playAgainButton);
  }
}

let computerScore = 0,
  playerScore = 0;

const buttons = document.querySelectorAll("button");

const scoreContainer = document.querySelector(".score-container");

const conclusion = document.createElement("div");
conclusion.classList.add("conclusion");

const score = document.createElement("div");
score.classList.add("actual-score");

const compScore = document.createElement("div");
const plyScore = document.createElement("div");
compScore.textContent = `Computer: ${computerScore}`;
plyScore.textContent = `Player: ${playerScore}`;

score.appendChild(compScore);
score.appendChild(plyScore);
scoreContainer.appendChild(score);

const choiceDisplay = document.querySelector(".choice-display");
const compChoice = document.createElement("div");
const playerChoice = document.createElement("div");

const choiceResultDiv = document.querySelector(".choice-and-result > div");

const playAgainButton = document.createElement("button");
playAgainButton.textContent = "PLAY AGAIN";
playAgainButton.setAttribute("onclick", "window.location.href='./index.html';");

const choiceResultContainer = document.querySelector(".choice-and-result");
const catImage = document.createElement("img");
score.classList.add("cat");
catImage.setAttribute("src", "./imgs/cat_school_new3.png");
catImage.setAttribute("height", "170");

const finalResult = document.createElement("div");
finalResult.classList.add("final-result");

buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});
