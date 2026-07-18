
/* ==========================================
   main.js
   Modern Portfolio Website
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Mobile Navigation
    ========================== */

    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.getElementById("navbar");

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navbar.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }

    });

    // Close menu after clicking a navigation link
    document.querySelectorAll(".navbar a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            const icon = menuBtn.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        });

    });

    /* ==========================
       Dark / Light Theme
    ========================== */

const themeToggle = document.getElementById("theme-toggle");

// Function to update the theme icon
function updateThemeIcon() {
    if (document.body.classList.contains("dark")) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

if (themeToggle) {

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    updateThemeIcon();

    // Toggle theme
    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        updateThemeIcon();

    });
}

    /* ==========================
       Active Navigation on Scroll
    ========================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    function activeMenu() {

        let currentSection = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;
            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                currentSection = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", activeMenu);

    /* ==========================
       Header Shadow
    ========================== */

    const header = document.querySelector(".header");

    function headerShadow() {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";

        } else {

            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";

        }

    }

    window.addEventListener("scroll", headerShadow);

    /* ==========================
       Scroll Reveal Animation
    ========================== */

    const revealElements = document.querySelectorAll(
        ".section, .skill-card, .project-card, .certificate-card, .timeline-item"
    );

    function revealOnScroll() {

        revealElements.forEach(element => {

            const position = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (position < windowHeight - 120) {

                element.style.opacity = "1";
                element.style.transform = "translateY(0)";

            }

        });

    }

    // Initial hidden state
    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(40px)";
        element.style.transition = "all 0.8s ease";

    });

    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);

    /* ==========================
       Smooth Scroll
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            }

        });

    });

    /* ==========================
       Contact Form
    ========================== */

    const contactForm = document.querySelector(".contact-form");

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");

        let isValid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                input.style.border = "2px solid red";
                isValid = false;

            } else {

                input.style.border = "";

            }

        });

        if (!isValid) {

            alert("Please fill in all required fields.");
            return;

        }

        alert("Thank you! Your message has been submitted successfully.");

        contactForm.reset();

    });

});

