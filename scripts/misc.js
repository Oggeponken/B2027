const containers=document.querySelectorAll(".agenda .day-container");

containers.forEach(function(container,index){
container.addEventListener("click",function(){
container.classList.toggle("expanded");
});

const leftArrow=container.querySelector(".arrow.left");
const rightArrow=container.querySelector(".arrow.right");

leftArrow.addEventListener("click",function(event){
event.stopPropagation();
container.classList.remove("expanded");
const previousIndex=(index-1+containers.length)%containers.length;
containers[previousIndex].classList.add("expanded");
});

rightArrow.addEventListener("click",function(event){
event.stopPropagation();
container.classList.remove("expanded");
const nextIndex=(index+1)%containers.length;
containers[nextIndex].classList.add("expanded");
});
});


const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.classList.add("circle");
        svg.setAttribute("viewBox", "0 0 100 100");

        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "50");
        circle.setAttribute("cy", "50");
        circle.setAttribute("r", "70");

        svg.appendChild(circle);
        link.appendChild(svg);

        setTimeout(() => {
            svg.remove();
        }, 600);
    });
});

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

// Countdown timer for the wedding date
const weddingDate = new Date("2027-06-24T00:00:00");

function updateCountdown() {
    const now = new Date();
    const difference = weddingDate - now;
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").textContent = "Om " + days + " dagar är ni välkomna till vårt bröllop!";
}

updateCountdown();
setInterval(updateCountdown, 60000);



