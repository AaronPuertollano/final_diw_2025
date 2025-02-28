document.getElementById('menu-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

const images = document.querySelectorAll("#carousel img");
let index = 0;

function showSlide(i) {
    images.forEach(img => img.classList.add("hidden"));
    images[i].classList.remove("hidden");
}

document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showSlide(index);
});

document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % images.length;
    showSlide(index);
});

setInterval(() => {
    index = (index + 1) % images.length;
    showSlide(index);
}, 9000);

document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("video");

    video.addEventListener("play", function () {
        video.muted = false;
    });
});