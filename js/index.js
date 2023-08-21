const buttons = document.querySelectorAll("[data-carousel-button]");
const links = document.querySelectorAll(".nav-item");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("I have been clicked");
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

//Handling click event of the Menu button on Mobile devices
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("mobile-menu-button");
  const navItems = document.getElementById("navItems");

  menuButton.addEventListener("click", function () {
    navItems.classList.toggle("active");
  });

  // Add a click event listener to the document
  document.addEventListener("click", function (event) {
    const isMenuButtonClicked = menuButton.contains(event.target); // Check if the click is within the menu button
    const isMenuClicked = navItems.contains(event.target); // Check if the click is within the menu

    if (!isMenuButtonClicked && !isMenuClicked) {
      navItems.classList.remove("active"); // Close the menu if the click is outside the button and the menu
    }
  });
});
