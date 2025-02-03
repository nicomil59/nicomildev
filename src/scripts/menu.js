const setupMenu = () => {
    
    // console.log("MENU SCRIPT LOADED");
    
    const openMenuIcon = document.querySelector("#open-menu");
    const closeMenuIcon = document.querySelector("#close-menu");
    const menu = document.querySelector("#main-nav");
    const navLinks = document.querySelectorAll("nav a");

    if (!openMenuIcon || !closeMenuIcon || !menu) return;

    const openMenu = () => {
        menu.classList.remove("hidden");
        openMenuIcon.classList.add("hidden");
        closeMenuIcon.classList.remove("hidden");
    };

    const closeMenu = () => {
        menu.classList.add("hidden");
        openMenuIcon.classList.remove("hidden");
        closeMenuIcon.classList.add("hidden");
    };

    openMenuIcon.addEventListener("click", openMenu);
    closeMenuIcon.addEventListener("click", closeMenu);

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (openMenuIcon.classList.contains("hidden")) {
                closeMenu();
            }
        });
    });
}

// Exécuter le script au chargement initial
setupMenu();

// Réexécuter après un changement de page via Astro
document.addEventListener("astro:after-swap", () => {
    setupMenu();
});