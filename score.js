// Iteration 5: Store the player score and display it on the game over screen

  document.addEventListener('DOMContentLoaded', function () {
    const playAgainButton = document.getElementById('play-again-button');
    const scoreBoard = document.getElementById('score-board');

    // Retrieve the player score from wherever it's stored (e.g., a variable or local storage)
    let playerScore = 100; // Replace this with the actual score

    // Display the player score on the game over screen
    scoreBoard.textContent = playerScore;

    playAgainButton.addEventListener('click', function () {
        // Add code to reset the game or navigate back to the game start page
        gameCover.style.display = 'block';
        gamePage.style.display = 'none';
        // Add other code to reset the game state if needed
    });
});
