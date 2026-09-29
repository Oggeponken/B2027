// image flipper
const images = [
    "assets/accomondations1.jpg",
    "assets/accomondations2.jpg",
    "assets/accomondations3.jpg",
    "assets/accomondations4.jpg"
];

let currentImage = 0;

const image = document.getElementById("gallery-image");
const leftArrow = document.querySelector(".image-viewer .arrow.left");
const rightArrow = document.querySelector(".image-viewer .arrow.right");

rightArrow.addEventListener("click", function() {
    currentImage = (currentImage + 1) % images.length;
    image.src = images[currentImage];
});

leftArrow.addEventListener("click", function() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    image.src = images[currentImage];
});