// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
// app.js

document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('play-button');
    const gameCover = document.querySelector('.game-cover');
    const gamePage = document.querySelector('.game-page');
  
    playButton.addEventListener('click', function () {
      gameCover.style.display = 'none';
      gamePage.style.display = 'block';
      // Add code for other game initialization here if needed

      
    });
  });
  