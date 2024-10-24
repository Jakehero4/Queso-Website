// Show section based on button click
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('visible'));
    document.getElementById(sectionId).classList.add('visible');
}

// Lightbox functionality
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Scroll animation on page load
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            section.classList.add('visible');
        }
    });
});

// Set default section to Home
window.onload = function () {
    showSection('home');
};
