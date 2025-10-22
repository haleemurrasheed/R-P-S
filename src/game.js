// src/game.js
import { UI } from "./ui.js";

// Game object handles all gameplay logic and data.
export const Game = {
  NUM_ROUNDS: 5,
  round: 0,
  humanScore: 0,
  computerScore: 0,

  // Randomly select the computer’s move
  getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  },

  // Main function called every time the player makes a move
  playRound(humanChoice) {
    // Stop if 5 rounds have been played
    if (this.round >= this.NUM_ROUNDS) {
      UI.showResult("Game over! Click Play Again.", "tie");
      return;
    }

    const computerChoice = this.getComputerChoice();
    let result = "tie";
    let message = "";

    // Compare moves to determine the winner
    if (humanChoice === computerChoice) {
      message = `🤝 It's a tie! Both chose ${humanChoice}.`;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      this.humanScore++;
      result = "win";
      message = ` ✅ You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
      this.computerScore++;
      result = "loss";
      message = `❌ You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    this.round++; // Increase round number

    // Update visuals
    UI.updateScores(this.round, this.humanScore, this.computerScore);
    UI.showResult(message, result);
    UI.log(message);

    // End after last round
    if (this.round === this.NUM_ROUNDS) {
      this.endGame();
    }
  },

  // Determine overall winner
  endGame() {
    let finalMessage;
    if (this.humanScore > this.computerScore) {
      finalMessage = "🎉 You are the grand winner!";
    } else if (this.humanScore < this.computerScore) {
      finalMessage = "💻 Computer wins!";
    } else {
      finalMessage = "🤝 It's a tie!";
    }
    UI.showResult(finalMessage, "tie");
  },

  // Reset game data and UI
  reset() {
    this.round = 0;
    this.humanScore = 0;
    this.computerScore = 0;
    UI.reset();
  },
};
