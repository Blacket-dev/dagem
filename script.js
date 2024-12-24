document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const navbar = document.getElementById("navbar");

  // Toggle the mobile menu visibility
  menuButton.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the window
    mobileMenu.classList.toggle("hidden");
  });

  // Close mobile menu when clicking outside
  window.addEventListener("click", (event) => {
    if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
      mobileMenu.classList.add("hidden");
    }
  });

  // Add scroll effect to navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });

        // Close mobile menu if open
        if (!mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
        }
      }
    });
  });

  // Optional: Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});
