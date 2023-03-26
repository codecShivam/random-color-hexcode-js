const colorDisplay = document.getElementById("color-display");
const colorButton = document.getElementById("color-button");
colorButton.addEventListener("click", generateColor);
function generateColor() {
  const hexCode = Math.floor(Math.random() * 16777215).toString(16);
  colorDisplay.style.backgroundColor = "#" + hexCode;
  colorDisplay.innerText = "#" + hexCode;
}
