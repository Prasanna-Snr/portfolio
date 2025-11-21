// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Fade-in Reveal Animations
const revealElements = document.querySelectorAll(".glass, .project-card, .contact-item");

window.addEventListener("scroll", () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 50) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

/* ===========================
   SEE MORE PROJECTS FUNCTION
=========================== */

document.addEventListener("DOMContentLoaded", () => {
    const projectsGrid = document.getElementById("projectsGrid");
    const seeMoreBtn = document.getElementById("seeMoreBtn");

    const projectCards = projectsGrid.querySelectorAll(".project-card");

    // Show See More button only if > 6 cards
    if (projectCards.length > 6) {
        seeMoreBtn.style.display = "block";

        // Hide all cards after the 6th
        projectCards.forEach((card, index) => {
            if (index >= 6) {
                card.style.display = "none";
                card.classList.add("hidden-project");
            }
        });
    }

    // Click to show hidden cards
    seeMoreBtn.addEventListener("click", () => {
        const hidden = projectsGrid.querySelectorAll(".hidden-project");

        hidden.forEach(card => {
            card.style.display = "block";
            card.classList.remove("hidden-project");
        });

        // Hide the See More button after expanding
        seeMoreBtn.style.display = "none";
    });
});
