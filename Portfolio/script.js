// Select all sections
const sections = document.querySelectorAll(".section");

// Function to reveal elements on scroll
function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("show");
        }
    });
}

// Run on scroll
window.addEventListener("scroll", revealSections);

// Run once on load
revealSections();

const navLinks = document.querySelectorAll("nav a");
const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    allSections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
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

const buttons = document.querySelectorAll(".btn, .card-btn");

buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        const circle = document.createElement("span");
        circle.classList.add("ripple");

        const rect = button.getBoundingClientRect();
        circle.style.left = e.clientX - rect.left + "px";
        circle.style.top = e.clientY - rect.top + "px";

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    });
});

