let fade = 0;
window.addEventListener("wheel", function(event) {
    fade += event.deltaY * 0.005;

    fade = Math.max(0, Math.min(fade, 1));

    document.querySelector(".whiteFade").style.opacity = fade*0.9;
    document.querySelector(".intro").style.opacity = fade;
});

const video = document.getElementById("engagementVid");
const pauseBtn = document.getElementById("pauseBtn");
const muteBtn = document.getElementById("muteBtn");

pauseBtn.addEventListener("click", function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

muteBtn.addEventListener("click", function() {
    video.muted = !video.muted;
});
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        event.preventDefault(); // prevents page scrolling

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
});

const menu = document.querySelector(".menu");

video.addEventListener("pause", function() {
    menu.classList.add("show");
});

video.addEventListener("play", function() {
    menu.classList.remove("show");
});