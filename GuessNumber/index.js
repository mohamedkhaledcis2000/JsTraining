"use strict";
// document.querySelector(".message").textContent = "Correct Number";
// document.querySelector(".guess").value = 23;
// document.querySelector(".number").textContent = 13;
// document.querySelector(".myScore").textContent = 10;
// document.querySelector("highscore").textContent;
const num = Math.trunc(Math.random() * 20) + 1;
console.log(num);

let score = 20;
console.log(score);
document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess);

  //win
  if (guess == num) {
    document.querySelector(".message").textContent = "Correct Number";
    score += 1;
    document.querySelector(".myScore").textContent = score;
    document.querySelector(".highscore").textContent = score;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = num;
    // loss
  } else {
    document.querySelector(".message").textContent = "Wrong Number";
    score -= 1;
    document.querySelector(".myScore").textContent = score;
    document.querySelector(".highscore").textContent = score;
  }
  // again
  document.querySelector(".btn-again").addEventListener("click", function () {
    location.reload();
  });
});
