
// MENU DE NAVIGATION MOBILE

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Modifier le symbole du menu
    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Fermer le menu");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    }
});

// FERMER LE MENU APRÈS AVOIR CLIQUÉ SUR UN LIEN

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    });
});

// ANNÉE AUTOMATIQUE DANS LE FOOTER

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

// ANIMATION D'APPARITION DES SECTIONS

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".section, .hero-card").forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});
