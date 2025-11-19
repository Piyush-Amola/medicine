document.addEventListener("DOMContentLoaded", () => {
  // Fetch header HTML
  fetch("../component/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;

      // After header is loaded, setup mobile menu toggle
      const btn = document.getElementById("menu-btn");
      const menu = document.getElementById("mobile-menu");

      if (btn && menu) {
        btn.addEventListener("click", () => {
          menu.classList.toggle("hidden");
        });
      }
    })
    .catch((error) => console.error("Error loading header:", error));

  // Fetch footer HTML
  fetch("../component/footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
});
