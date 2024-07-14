document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "home"; // default to home if no section is detected

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 60;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });

    // Set Home as active on page load
    const homeLink = document.querySelector('nav ul li a[href="#home"]');
    homeLink.classList.add("active");
});