const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].style.transform = `translateX(-100%)`;
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.transform = `translateX(0)`;
}

document.addEventListener('click', (e) => {
    if (e.clientX > window.innerWidth * 0.8) {
        showSlide(currentSlide + 1);
    }
});

// Initialize positions
slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * index}%)`;
});