let count1 = 0;
let count2 = 0;

document.querySelector("button").addEventListener("click", () => {
  let diceStartImage = document.getElementById("dice-start");
  let diceRollImages = document.getElementById("dice-roll");

  diceStartImage.style.display = "none";
  diceRollImages.style.display = "grid";

  let randomNum1 = Math.floor(Math.random() * 6) + 1;
  let randomDiceImage1 = "images/dice-" + randomNum1 + ".png";
  let image1 = document.getElementById("img-1");
  image1.setAttribute("src", randomDiceImage1);

  let randomNum2 = Math.floor(Math.random() * 6) + 1;
  let randomDiceImage2 = "images/dice-" + randomNum2 + ".png";
  let image2 = document.getElementById("img-2");
  image2.setAttribute("src", randomDiceImage2);

  if (randomNum1 > randomNum2) {
    document.querySelector(".winner-text").textContent = "Player 1 wins!";
    count1++;
    document.getElementById("count-1").textContent = "Count: " + count1;
  } else if (randomNum1 < randomNum2) {
    document.querySelector(".winner-text").textContent = "Player 2 wins!";
    count2++
    document.getElementById("count-2").textContent = "Count: " + count2;
  } else {
    document.querySelector(".winner-text").textContent = "Draw!";
  }
})