/* RULES: 
- game consists of two players , computer and the user . 
- computer will  output out a random choice at the count of 4 ( rock, paper, scissors,shoot) and the user will have to press enter at the same time.
- if one player chooses rock and the other user chooses scissors, then the player who chose rock will get a point.
- if one player chooses rock and the other user chooses paper, then the player who chose paper will get a point.
- if one player chooses paper and the other user chooses scissors, then the player who chose scissors get a point.
- if both the players have the same choice then no one gets a point.
- this game is best of 5 so the player with highest points at the end of 5 rounds will win , and if there is a tie then there will be additional rounds until the tie is broken or until the user wishes to not proceed any further.
*/

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

let computerScore = 0,
  playerScore = 0;

/* - if one player chooses rock and the other user chooses scissors, then the player who chose rock will get a point.
  - if one player chooses rock and the other user chooses paper, then the player who chose paper will get a point.
  - if one player chooses paper and the other user chooses scissors, then the player who chose scissors get a point.
  - if both the players have the same choice then no one gets a point. */
function playRound(playerSelection, computerSelection) {
  if (!(playerScore == 5 || computerScore == 5)) {
    computerSelection = getComputerChoice();
    //playerSelection = prompt("User , please enter your selection");
    if (this.classList.value == "rock") {
      playerSelection = "rock";
    }
    if (this.classList.value == "paper") {
      playerSelection = "paper";
    }
    if (this.classList.value == "scissors") {
      playerSelection = "scissors";
    }
    /*  div.textContent =
    "computer's choice is " +
    computerSelection +
    "\n" +
    "Your choice is " +
    playerSelection;
 */
    container.textContent = `Computer's choice is ${computerSelection}.
Your choice is ${playerSelection}`;
    //both players choose same value
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
      conclusion.textContent = "It's a tie.";
      container.appendChild(conclusion);
      score.textContent = `Score is Computer: ${computerScore} and Player: ${playerScore}`;
      container.appendChild(score);
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
        container.appendChild(conclusion);
        ++playerScore;
      } else {
        conclusion.textContent = "Computer won this round";
        container.appendChild(conclusion);
        ++computerScore;
      }
      score.textContent = `Score is Computer: ${computerScore} and Player: ${playerScore}`;
      container.appendChild(score);
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
        container.appendChild(conclusion);
        ++playerScore;
      } else {
        conclusion.textContent = "Computer won this round";
        container.appendChild(conclusion);
        ++computerScore;
      }
      score.textContent = `Score is Computer: ${computerScore} and Player: ${playerScore}`;
      container.appendChild(score);
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
        container.appendChild(conclusion);
        ++playerScore;
      } else {
        conclusion.textContent = "Computer won this round";
        container.appendChild(conclusion);
        ++computerScore;
      }
      score.textContent = `Score is Computer: ${computerScore} and Player: ${playerScore}`;
      container.appendChild(score);
    }
  } else if (playerScore == 5) {
    finalResult.textContent = "You won!! Computer lost!! ";
    container.appendChild(finalResult);
  } else {
    finalResult.textContent = "Computer won!! You lost!! ";
    container.appendChild(finalResult);
  }
}

/* this game is best of 5 so the player with highest points at the end of 5 rounds will win , and if there is a tie then there will be additional rounds until the tie is broken or until the user wishes to not proceed any further. */
//main game function
/* function playGame() {
  playRound();
} */

//tie breaking function if a tie occurs at the end of 5 rounds.

//playGame();

const buttons = document.querySelectorAll("button");
const container = document.querySelector(".container");
//const div = document.querySelector("div.result");

const conclusion = document.createElement("div");
conclusion.classList.add("conclusion");

const score = document.createElement("div");
score.classList.add("score");

const finalResult = document.createElement("div");
finalResult.classList.add("final-result");
buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});
