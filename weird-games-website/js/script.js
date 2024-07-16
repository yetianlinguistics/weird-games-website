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

// Add this to the end of your existing JavaScript file

document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.style.backgroundColor = '#ffffff';
    });
  
    section.addEventListener('mouseleave', () => {
      section.style.backgroundColor = '';
    });
  });
  
  // Simple placeholder for buy button functionality
  document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', (e) => {
      alert(`You clicked Buy Now for ${e.target.closest('.section').querySelector('h2').textContent}`);
      // Here you would typically integrate with your e-commerce system
    });
  });