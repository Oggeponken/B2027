const containers = document.querySelectorAll(".agenda .day-container");

containers.forEach(function(container) {
    container.addEventListener("click", function() {
        container.classList.toggle("expanded");
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