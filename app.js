// Get the color display and button elements
const colorDisplay = document.getElementById("color-display");
const colorButton = document.getElementById("color-button");

// Add a click event listener to the button
colorButton.addEventListener("click", generateColor);

// Function to generate a random hex color code
function generateColor() {
  // Generate a random 6-digit hex number
  const hexCode = Math.floor(Math.random() * 16777215).toString(16);

  // Set the background color of the display element to the generated color
  colorDisplay.style.backgroundColor = "#" + hexCode;

  // Update the text of the display element with the generated color code
  colorDisplay.innerText = "#" + hexCode;
}
