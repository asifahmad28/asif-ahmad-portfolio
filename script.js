// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile navigation toggle (can be added later)
// const navToggle = document.querySelector('.nav-toggle');
// const navLinks = document.querySelector('.nav-links');

// navToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });