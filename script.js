// Reveal sections on scroll
const sections = document.querySelectorAll(".section");

function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();


// Active navbar link on scroll
const navLinks = document.querySelectorAll("nav a");
const allSections = document.querySelectorAll("section[id]");

function setActiveNavLink() {
    let current = "";

    allSections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop - 120 &&
            window.scrollY < sectionTop + sectionHeight - 120
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", setActiveNavLink);
setActiveNavLink();


// Ripple effect on buttons
const buttons = document.querySelectorAll(".btn, .card-btn");

buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        const circle = document.createElement("span");
        circle.classList.add("ripple");

        const rect = this.getBoundingClientRect();
        circle.style.left = `${e.clientX - rect.left}px`;
        circle.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 500);
    });
});


// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");

        const isOpen = navMenu.classList.contains("show-menu");
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show-menu");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}