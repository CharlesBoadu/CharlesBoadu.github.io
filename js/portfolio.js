const lightbox = document.getElementById("lightbox");
const closeButton = document.getElementById("closeButton");
const lightboxImages = document.querySelectorAll(".lightbox-trigger");
const largeImage = document.getElementById("largeImage");

lightboxImages.forEach(image => {
  image.addEventListener("click", () => {
    largeImage.src = image.src;
    lightbox.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  });
});

closeButton.addEventListener("click", () => {
  lightbox.style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling when lightbox is closed
});
