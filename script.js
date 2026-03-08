const storageKey = "portfolio-theme";
const body = document.body;
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeLabel = document.querySelector(".theme-toggle__label");
const menuToggle = document.querySelector(".menu-toggle");
const headerPanel = document.querySelector(".header-panel");
const navLinks = document.querySelectorAll(".site-nav a");
const yearElement = document.getElementById("year");

function applyTheme(theme) {
  body.dataset.theme = theme;

  if (themeToggle && themeLabel) {
    const nextTheme = theme === "dark" ? "light" : "dark";
    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
    themeLabel.textContent = theme === "dark" ? "Dark" : "Light";
  }
}

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem(storageKey);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function toggleTheme() {
  const nextTheme = body.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  window.localStorage.setItem(storageKey, nextTheme);
}

function closeMenu() {
  if (!menuToggle || !headerPanel) {
    return;
  }

  menuToggle.setAttribute("aria-expanded", "false");
  headerPanel.classList.remove("is-open");
}

function toggleMenu() {
  if (!menuToggle || !headerPanel) {
    return;
  }

  const isOpen = headerPanel.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
}

applyTheme(getInitialTheme());

if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}

if (menuToggle) {
  menuToggle.addEventListener("click", toggleMenu);
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
