// Save user-selected background color
function saveBackgroundColor(color) {
  localStorage.setItem("bgColor", color);
}

// Load saved preference
function loadBackgroundColor() {
  const savedColor = localStorage.getItem("bgColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
}

// Animate button on click and store preference
document.getElementById("colorBtn").addEventListener("click", () => {
  const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = newColor;
  saveBackgroundColor(newColor);

  const btn = document.getElementById("colorBtn");
  btn.classList.add("animated-btn");

  // Remove animation class after it ends so it can retrigger
  btn.addEventListener("animationend", () => {
    btn.classList.remove("animated-btn");
  }, { once: true });
});

// Load saved preference on page load
window.addEventListener("DOMContentLoaded", loadBackgroundColor);
