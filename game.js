// Iteration 2: Generate 2 random number and display it on the screen

function generateRandomNumbers() {
    const number1 = Math.floor(Math.random() * 10) + 1;
    const number2 = Math.floor(Math.random() * 10) + 1;
  
    // Display the random numbers on the screen or perform any other necessary actions
    console.log(`Random Numbers: ${number1} and ${number2}`);
  }
  
  // Call the function when the game page is loaded or when needed
  document.addEventListener('DOMContentLoaded', function () {
    generateRandomNumbers();
    // Add other initialization code if needed
  });
  

// Iteration 3: Make the options button functional

// Inside your existing script or at the end of your app.js file

// Assuming you have a function to handle options (replace it with your actual function)
function handleOptions() {
    // Add the code to handle options here
    console.log("Options button clicked!");
  }
  
  // Get the options button element by its ID
  const optionsButton = document.getElementById("options-button");
  
  // Add an event listener to the options button
  optionsButton.addEventListener("click", handleOptions);
  

// Iteration 4: Build a timer for the game


let timer;
let seconds = 0;

function startTimer() {
  timer = setInterval(function () {
    seconds++;
    // Update the timer display on the screen if needed
    console.log(`Timer: ${seconds} seconds`);
  }, 1000);
}

// Call startTimer() when needed, e.g., when the game starts

// To stop the timer (e.g., when the game is over)
// clearInterval(timer);
document.addEventListener('DOMContentLoaded', function () {
    // Other initialization code
    startTimer(); // Start the timer when the game page is loaded
});


