const particlesContainer = document.querySelector('.particles');

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Randomize size
    const size = Math.random() * 10 + 5; // Size between 5px and 15px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Randomize position
    particle.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    particle.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration between 2s and 5s

    particlesContainer.appendChild(particle);

    // Remove particle after animation ends
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

// Create particles at intervals
setInterval(createParticle, 300); // Create a new particle every 300ms
