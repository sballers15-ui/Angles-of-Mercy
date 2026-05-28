/**
 * Angels of Mercy Health & Wellness Center, PLLC
 * Core Dynamic Client Interface Framework Logic Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize dynamic compliant system data parameters
  injectCurrentYear();
  initializeInterfaceEvents();
  initializeScrollAnimations();
});

/**
 * Ensures system copy date metrics are accurately synchronized to localized runtime bounds
 */
function injectCurrentYear() {
  const targetYearElement = document.getElementById("year");
  if (targetYearElement) {
    targetYearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Registers interaction boundaries for global navigation target routing actions
 */
function initializeInterfaceEvents() {
  const bookingUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdM5jlm5wt9H5dEgvdADcKrFd4QYa9x30Pmb2TwHXESmN8Fpg/viewform?usp=header";
  const bookingButtonIds = ["header-book-btn", "hero-book-btn", "booking-portal-btn"];

  bookingButtonIds.forEach((buttonId) => {
    const button = document.getElementById(buttonId);

    if (button) {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = bookingUrl;
      });
    }
  });
}

/**
 * Initialize scroll-triggered animations using Intersection Observer API
 */
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements that have scroll animation classes
  const animatedElements = document.querySelectorAll(
    "[class*='scroll-fade-'], " +
    "[class*='scroll-scale']"
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
}