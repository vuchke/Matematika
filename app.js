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

const tilt = () => {
  
  VanillaTilt.init(document.querySelectorAll(".box"), {
    reverse: false,
    reset: true,
    max: 5,
    speed: 1000,
    gyroscope: true,
    gyroscopeMinAngleX: -20,
    gyroscopeMaxAngleX: 20,
    gyroscopeMinAngleY: -15,
    gyroscopeMaxAngleY: -2,
    
  });
}

// here we call all functions
const app = () => {
  navSlide();
  tilt();
};
// we invoke all the functions
app();
