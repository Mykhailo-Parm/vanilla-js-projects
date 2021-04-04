const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let result = '#';
  for (let i = 0; i < 6; i++) {
    result += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = result;
  color.textContent = result;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
