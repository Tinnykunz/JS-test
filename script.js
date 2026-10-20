let score = {
  wins: 0,
  loses: 0,
  tie: 0,
};
function playgame(playerMove) {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3) {
    computerMove = "scissors";
  }

  console.log(computerMove);

  let result = "";
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie !";
    } else if (computerMove === "paper") {
      result = "You Lose !";
    } else if (computerMove === "scissors") {
      result = "You Win !";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win !";
    } else if (computerMove === "paper") {
      result = "Tie !";
    } else if (computerMove === "scissors") {
      result = "You Lose !";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You Lose !";
    } else if (computerMove === "paper") {
      result = "You Win !";
    } else if (computerMove === "scissors") {
      result = "Tie !";
    }
  }
  if (result === "You Win !") {
    score.wins += 1;
  } else if (result === "You Lose !") {
    score.loses += 1;
  } else if (result === "Tie !") {
    score.tie += 1;
  }
  alert(`The computer picked ${computerMove}\n${result}\nWins :${score.wins} loses :${score.loses} Tie :${score.tie}`);
}

function reset() {
  score.wins = 0;
  score.loses = 0;
  score.tie = 0;
}
