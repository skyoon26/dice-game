document.querySelector("button").addEventListener("click", () => {
  let diceStartImage = document.getElementById("dice-start");
  let diceRollImages = document.getElementById("dice-roll");

  diceStartImage.style.display = "none";
  diceRollImages.style.display = "grid";
})