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
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up
    navbar.style.transform = "translateY(0)";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});