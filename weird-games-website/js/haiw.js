// Select all cards and the style element
const cards = document.querySelectorAll(".card");
const style = document.querySelector(".hover");

// Function to handle mousemove event
function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate positions for gradient and sparkle effects
    const { gradientPos, sparklePos, opacity, transform } = calculateEffectPositions(x, y, card.clientWidth, card.clientHeight);

    // Apply styles
    style.textContent = `
        .card:hover:before { background-position: ${gradientPos.x}% ${gradientPos.y}%; }  /* gradient */
        .card:hover:after { background-position: ${sparklePos.x}% ${sparklePos.y}%; opacity: ${opacity}; }   /* sparkles */ 
    `;

    card.style.transform = transform;
}

// Function to calculate positions for effects
function calculateEffectPositions(x, y, width, height) {
    const px = Math.abs(Math.floor(100 / width * x) - 100);
    const py = Math.abs(Math.floor(100 / height * y) - 100);
    const pa = (50 - px) + (50 - py);

    return {
        gradientPos: {
            x: 50 + (px - 50) / 1.5,
            y: 50 + (py - 50) / 1.5
        },
        sparklePos: {
            x: 50 + (px - 50) / 7,
            y: 50 + (py - 50) / 7
        },
        opacity: (20 + Math.abs(pa) * 1.5) / 100,
        transform: `rotateX(${((50 - py) / 2) * -1}deg) rotateY(${((px - 50) / 1.5) * 0.5}deg)`
    };
}

// Function to handle mouseout event
function handleMouseOut() {
    style.textContent = "";
    this.style.transform = "";
    this.classList.add("animated");
}

// Function to handle click event (card flip)
function handleClick() {
    this.querySelector('.card-inner').style.transform = 
        this.querySelector('.card-inner').style.transform === 'rotateY(0deg)' 
            ? 'rotateY(180deg)' 
            : 'rotateY(0deg)';
}

// Add event listeners to all cards
cards.forEach(card => {
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseout", handleMouseOut);
    card.addEventListener("click", handleClick);
});