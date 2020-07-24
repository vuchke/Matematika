const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle nav
    nav.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    // Burger Animation
    burger.classList.toggle("toggle");
  });
};

// TITL

VanillaTilt.init(document.querySelectorAll(".box"), {
  reverse: false,
  max: 15,
  speed: 1000,
  glare: true, // if it should have a "glare" effect
  gyroscope: true, // Boolean to enable/disable device orientation detection
});

// here we call all functions
const app = () => {
  navSlide();
};
// we invoke all the functions
app();
