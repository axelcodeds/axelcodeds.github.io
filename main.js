// Initialize Vanta.js globe
VANTA.GLOBE({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x3b82f6,
  backgroundColor: 0xf8fafc,
  size: 0.8,
});

// Initialize feather icons
feather.replace();

// Mobile menu toggle
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    // You would implement mobile menu functionality here
    alert("Mobile menu would open here");
  });
