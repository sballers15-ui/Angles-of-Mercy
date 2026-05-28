/**
 * Angels of Mercy Health & Wellness Center, PLLC
 * Core Dynamic Client Interface Framework Logic Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize dynamic compliant system data parameters
  injectCurrentYear();
  initializeInterfaceEvents();
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