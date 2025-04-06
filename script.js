// You can add future interactivity here (e.g., scroll effects, modal, etc.)
console.log("Welcome to Tourist Places in Dubai!");
// 🌙 Toggle Dark Mode
const darkToggle = document.getElementById("darkModeToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ⬆️ Show/Hide Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// ⬆️ Scroll to Top
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

console.log("Dark mode and scroll features activated!");
