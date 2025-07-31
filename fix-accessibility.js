// fix-accessibility.js
window.addEventListener("DOMContentLoaded", function () {
  const searchButtons = document.querySelectorAll("button[aria-label='Toggle search']");
  searchButtons.forEach(btn => {
    // Add accessible name if it's missing or empty
    if (!btn.getAttribute("aria-label") || btn.getAttribute("aria-label").trim() === "") {
      btn.setAttribute("aria-label", "Search");
    }
  });
});
