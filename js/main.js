// ======================================
// My Crusade
// Main JavaScript
// ======================================

// Wait until the page has loaded.
document.addEventListener("DOMContentLoaded", () => {

    initializeFadeAnimations();
    initializeNavigationHighlight();
    initializeBackToTop();

});


// ======================================
// Fade In Animation
// ======================================

function initializeFadeAnimations() {

    const elements = document.querySelectorAll(".section, .card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(element => {

        element.classList.add("hidden");

        observer.observe(element);

    });

}



// ======================================
// Navigation Highlight
// ======================================

function initializeNavigationHighlight() {

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 150;

            if (window.scrollY >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}



// ======================================
// Back To Top Button
// ======================================

function initializeBackToTop() {

    const button = document.createElement("button");

    button.id = "backToTop";

    button.innerHTML = "↑";

    document.body.appendChild(button);

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    });

}