const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

// Load saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  root.classList.add("dark");
  toggleBtn.textContent = "☀️ Light Mode";
} else {
  toggleBtn.textContent = "🌙 Dark Mode";
}

// Toggle on button click
toggleBtn.addEventListener("click", () => {
  root.classList.toggle("dark");

  // Save preference
  if (root.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

// Navbar hide/show on scroll
const navbar = document.getElementById("navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Scrolling down - hide navbar
    navbar.classList.add("-translate-y-full");
  } else {
    // Scrolling up - show navbar
    navbar.classList.remove("-translate-y-full");
  }

  lastScrollY = currentScrollY;
});
