let count = parseInt(localStorage.getItem("tapCount")) || 0;
const counter = document.getElementById("counter");
const tapBtn = document.getElementById("tap-button");
const resetBtn = document.getElementById("reset-button");

function updateDisplay() {
  counter.textContent = count;
}

tapBtn.addEventListener("click", () => {
  count++;
  localStorage.setItem("tapCount", count);
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  localStorage.setItem("tapCount", count);
  updateDisplay();
});

updateDisplay();

// PWA Service Worker registration
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
      .then(reg => console.log("Service Worker registered", reg))
      .catch(err => console.error("Service Worker registration failed:", err));
  });
}
