const value = document.getElementById("value");
let counter = 0;

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (el) => {
    const styles = el.currentTarget.classList;

    if (styles.contains('decrease')) {
      counter--;
    } else if (styles.contains('increase')) {
      counter ++;
    } else {
      counter = 0;
    }

    value.textContent = counter;

    if (counter > 0) {
      value.style.color = "green";
    } else if (counter < 0) {
      value.style.color = "red";
    } else if (counter == 0) {
      value.style.color = "#333";
    }
  })
})
