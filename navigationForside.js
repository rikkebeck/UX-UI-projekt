document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".topNav");
    const headerImage = document.querySelector(".imageContainer"); // Opdateret for at matche din HTML

    function updateNavbar() {
        if (window.scrollY > headerImage.clientHeight) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateNavbar);
});
