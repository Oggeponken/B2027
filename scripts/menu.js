const header = document.querySelector("#phone-header .menu#phone");

const buttonImage = document.querySelector("#header-image");
const topMenu = document.querySelector("#phone-top-menu");

function toggleMenu() {
    console.log(header)
    header.classList.toggle("collapsed");

    buttonImage.src = header.classList.contains("collapsed")
        ? "assets/icons/hamburger.png"
        : "assets/icons/hamburger2.png";
}

document.addEventListener("click", function(event) {
    if (!topMenu.contains(event.target) && !header.contains(event.target)) {
        header.classList.add("collapsed");
        buttonImage.src = "assets/icons/hamburger.png";
    }
});