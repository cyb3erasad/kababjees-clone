// ===== Kababjees Frontend Animations =====

// Animate header links scaling effect
document.querySelectorAll("header ul li a").forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.transform = "scale(1.2)";
        link.style.transition = "transform 0.3s ease";
    });
    link.addEventListener("mouseleave", () => {
        link.style.transform = "scale(1)";
    });
});

// Search bar glow on focus
const searchBar = document.querySelector("main section:first-child input");
if (searchBar) {
    searchBar.addEventListener("focus", () => {
        searchBar.style.boxShadow = "0 0 20px rgba(255, 204, 128, 0.9)";
    });
    searchBar.addEventListener("blur", () => {
        searchBar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    });
}

// Scroll animation for popular and starter cards
const cards = document.querySelectorAll(".card, .card-starter, menu-cards");
window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (cardTop < triggerPoint) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.style.transition = "all 0.6s ease-out";
        }
    });
});
// Hamburger menu 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('header ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

