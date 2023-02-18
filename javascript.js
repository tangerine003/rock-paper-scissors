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
  computerSelection = getComputerChoice();
  playerSelection = prompt("User , please enter your selection");
  console.log(computerSelection);
  console.log(playerSelection);

  //both players choose same value
  if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
    console.log(
      `It's a tie. Score is Computer: ${computerScore} and Player: ${playerScore} `
    );
  }

  //one player chooses rock and the other chooses scissors ,the one who chose rock will win
  else if (
    (playerSelection.toUpperCase() == "ROCK" ||
      playerSelection.toUpperCase() == "SCISSORS") &&
    (computerSelection.toUpperCase() == "ROCK" ||
      computerSelection.toUpperCase() == "SCISSORS")
  ) {
    if (playerSelection.toUpperCase() == "ROCK") {
      console.log("Player won this round.");
      ++playerScore;
    } else {
      console.log("Computer won this round");
      ++computerScore;
    }
    console.log(` Score is Computer: ${computerScore} and Player: ${playerScore} `);
  }

  //one player chooses rock and the other  chooses paper ,the one who chose paper will win
  else if (
    (playerSelection.toUpperCase() == "ROCK" ||
      playerSelection.toUpperCase() == "PAPER") &&
    (computerSelection.toUpperCase() == "ROCK" ||
      computerSelection.toUpperCase() == "PAPER")
  ) {
    if (playerSelection.toUpperCase() == "PAPER") {
      console.log("Player won this round.");
      ++playerScore;
    } else {
      console.log("Computer won this round");
      ++computerScore;
    }
    console.log(` Score is Computer: ${computerScore} and Player: ${playerScore} `);
  }

  //one player chooses paper and the other  chooses scissors ,the one who chose scissors will win
  else if (
    (playerSelection.toUpperCase() == "SCISSORS" ||
      playerSelection.toUpperCase() == "PAPER") &&
    (computerSelection.toUpperCase() == "SCISSORS" ||
      computerSelection.toUpperCase() == "PAPER")
  ) {
    if (playerSelection.toUpperCase() == "SCISSORS") {
      console.log("Player won this round.");
      ++playerScore;
    } else {
      console.log("Computer won this round");
      ++computerScore;
    }
    console.log(` Score is Computer: ${computerScore} and Player: ${playerScore} `);
  }
}

/* this game is best of 5 so the player with highest points at the end of 5 rounds will win , and if there is a tie then there will be additional rounds until the tie is broken or until the user wishes to not proceed any further. */
//main game function
function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (computerScore > playerScore) {
    console.log("Computer Won the game");
  } else if (computerScore == playerScore) {
    console.log("It's a tie !");
    let tieBreakerPrompt = prompt(
      "Would you like to play another round to break the tie?"
    );
    if (tieBreakerPrompt.toUpperCase() == "YES") {
      playToBreakTie();
    } else {
      console.log("Just deal with the game ending in a tie then.");
    }
  } else {
    console.log("Player Won the game");
  }
}

//tie breaking function if a tie occurs at the end of 5 rounds.
function playToBreakTie() {
  playRound();
  if (computerScore == playerScore) {
    let tieBreakerPrompt = prompt(
      "IT'S A TIE AGAIN !! Would you like to play another round to break the tie?"
    );
    if (tieBreakerPrompt.toUpperCase() == "YES") {
      playToBreakTie();
    } else {
      console.log("Just deal with the game ending in a tie then.");
    }
  } else {
    if (computerScore > playerScore) {
      console.log("Computer Won the game");
    } else {
      console.log("Player Won the game");
    }
    console.log(`Score is Computer: ${computerScore} and Player: ${playerScore} `);
  }
}

playGame();
