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




