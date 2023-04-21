let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let imagesTag = document.querySelectorAll("div img");

imagesTag[0].setAttribute("src", `images/dice${randomNumber1}.png`);
imagesTag[1].setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 WINS!!!";
}
if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").textContent = "DRAW!!!";
}
if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 WINS!!!";
}
