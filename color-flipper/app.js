const colors = ["green", "red", "yellow", "blue", "grey"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const index = getRandomNumber();
  document.body.style.backgroundColor = colors[index];
  color.textContent = colors[index];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
