// src/ui.js

// 1. Store all relevant HTML elements in one place for easy access.
export const el = {
  round: document.getElementById("round"),
  humanScore: document.getElementById("human-score"),
  computerScore: document.getElementById("computer-score"),
  result: document.getElementById("result"),
  log: document.getElementById("log"),
  choices: document.querySelectorAll(".choice"),
  restartBtn: document.getElementById("restart"),
};

// 2. The UI object manages only the screen updates.
export const UI = {
  // Update the round number and both scores
  updateScores(round, human, computer) {
    el.round.textContent = round;
    el.humanScore.textContent = human;
    el.computerScore.textContent = computer;
  },

  // Show a result message with color (win/lose/tie)
  showResult(message, type) {
    el.result.textContent = message;
    el.result.style.color =
      type === "win" ? "green" : type === "loss" ? "red" : "gray";
  },

  // Add a message to the log (shows latest round first)
  log(message) {
    const entry = document.createElement("div");
    entry.textContent = message;
    el.log.prepend(entry);
  },

  // Reset the interface for a new game
  reset() {
    this.updateScores(0, 0, 0);
    this.showResult("Click a button to play!", "tie");
    el.log.innerHTML = "";
  },
};
