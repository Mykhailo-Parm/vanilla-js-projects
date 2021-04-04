const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const aside = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
  aside.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  aside.classList.remove("show-sidebar");
});
