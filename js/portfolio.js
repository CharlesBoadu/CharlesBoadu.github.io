const smallImageOne = document.getElementById("smallImageOne");
const smallImageTwo = document.getElementById("smallImageTwo");

const lightboxOne = document.getElementById("lightboxOne");
const lightboxTwo = document.getElementById("lightboxTwo");

const closeButtonOne = document.getElementById("closeButtonOne");
const closeButtonTwo = document.getElementById("closeButtonTwo");

smallImageOne.addEventListener("click", () => {
    lightboxOne.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
});

smallImageTwo.addEventListener("click", () => {
    lightboxTwo.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
});

closeButtonOne.addEventListener("click", () => {
    lightboxOne.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling when lightbox is closed
});

closeButtonTwo.addEventListener("click", () => {
    lightboxTwo.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling when lightbox is closed
});
