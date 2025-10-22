// src/main.js
import { el } from "./ui.js";
import { Game } from "./game.js";

// Wait until the DOM is fully ready before running any JS
window.addEventListener("DOMContentLoaded", () => {
  // Add click listeners to every "rock/paper/scissors" button
  el.choices.forEach(btn => {
    btn.addEventListener("click", () => {
      const choice = btn.dataset.choice; // Read "data-choice" from HTML
      Game.playRound(choice);            // Start one round
    });
  });

  // "Play Again" button resets everything
  el.restartBtn.addEventListener("click", () => Game.reset());
  

  // Initialize game when page loads
  Game.reset();
});
