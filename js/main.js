/* ============================================
   NEXUS — Interactions
   ============================================ */

// Menu mobile
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
if (toggle && links) {
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  // Ferme le menu après un clic sur un lien (mobile)
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

// Reveal au scroll (pour les éléments .reveal placés plus bas dans la page)
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => obs.observe(el));
}
