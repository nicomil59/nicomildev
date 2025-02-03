const setupMenu = () =>  {
    console.log("menu charged !")
    
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
  
    // Nettoyer les anciens écouteurs d'événements
    openMenuIcon.removeEventListener("click", openMenu);
    closeMenuIcon.removeEventListener("click", closeMenu);
    navLinks.forEach((link) => link.removeEventListener("click", closeMenu));
  
    // Ajouter les nouveaux écouteurs
    openMenuIcon.addEventListener("click", openMenu);
    closeMenuIcon.addEventListener("click", closeMenu);
    navLinks.forEach((link) =>
      link.addEventListener("click", () => {
        if (openMenuIcon.classList.contains("hidden")) {
          closeMenu();
        }
      })
    );
  };
  
  // Exécuter au chargement initial
  setupMenu(); 
  
  // Réattacher les événements après chaque navigation Astro
  document.addEventListener("astro:after-swap", setupMenu);