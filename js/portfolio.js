const smallImageOne = document.getElementById("smallImageOne");
const smallImageTwo = document.getElementById("smallImageTwo");
const smallImageThree = document.getElementById("smallImageThree");
const smallImageFour = document.getElementById("smallImageFour");
const smallImageFive = document.getElementById("smallImageFive");

const lightboxOne = document.getElementById("lightboxOne");
const lightboxTwo = document.getElementById("lightboxTwo");
const lightboxThree = document.getElementById("lightboxThree");
const lightboxFour = document.getElementById("lightboxFour");
const lightboxFive = document.getElementById("lightboxFive");

const closeButtonOne = document.getElementById("closeButtonOne");
const closeButtonTwo = document.getElementById("closeButtonTwo");
const closeButtonThree = document.getElementById("closeButtonThree");
const closeButtonFour = document.getElementById("closeButtonFour");
const closeButtonFive = document.getElementById("closeButtonFive");

smallImageOne.addEventListener("click", () => {
  lightboxOne.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
});

smallImageTwo.addEventListener("click", () => {
  lightboxTwo.style.display = "block";
  document.body.style.overflow = "hidden";
});

smallImageThree.addEventListener("click", () => {
  lightboxThree.style.display = "block";
  document.body.style.overflow = "hidden";
});

smallImageFour.addEventListener("click", () => {
  lightboxFour.style.display = "block";
  document.body.style.overflow = "hidden";
});

smallImageFive.addEventListener("click", () => {
  lightboxFive.style.display = "block";
  document.body.style.overflow = "hidden";
});

//Close Buttons
closeButtonOne.addEventListener("click", () => {
  lightboxOne.style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling when lightbox is closed
});

closeButtonTwo.addEventListener("click", () => {
  lightboxTwo.style.display = "none";
  document.body.style.overflow = "auto";
});

closeButtonThree.addEventListener("click", () => {
  lightboxThree.style.display = "none";
  document.body.style.overflow = "auto";
});

closeButtonFour.addEventListener("click", () => {
  lightboxFour.style.display = "none";
  document.body.style.overflow = "auto";
});

closeButtonFive.addEventListener("click", () => {
  lightboxFive.style.display = "none";
  document.body.style.overflow = "auto";
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
