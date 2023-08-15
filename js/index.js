const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
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

// document.addEventListener("DOMContentLoaded", function () {
//   const carousel = document.querySelector("[data-carousel]");
//   const slides = document.querySelectorAll("[data-slides] .slide");
//   let currentIndex = 0;

//   function showSlide(index) {
//     slides.forEach((slide) => slide.classList.remove("active"));
//     slides[index].classList.add("active");
//   }

//   function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   }

//   function prevSlide() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
//   }

//   function autoSlide() {
//     nextSlide();
//   }

//   carousel.addEventListener("mouseenter", () => clearInterval(interval));
//   carousel.addEventListener("mouseleave", () => {
//     interval = setInterval(autoSlide, 3000); // Adjust slide duration in milliseconds (3 seconds in this example)
//   });

//   const nextButton = document.querySelector("[data-carousel-button='next']");
//   const prevButton = document.querySelector("[data-carousel-button='prev']");

//   nextButton.addEventListener("click", nextSlide);
//   prevButton.addEventListener("click", prevSlide);

//   let interval = setInterval(autoSlide, 3000); // Start auto-slide on page load
// });
