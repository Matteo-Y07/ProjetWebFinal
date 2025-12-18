document.addEventListener("DOMContentLoaded", function() {
  const themeLink = document.getElementById("theme");
  const btn = document.getElementById("toggle-style");

  if (!themeLink || !btn) {
    console.error("Erreur : vérifie que les éléments #theme et #toggle-style existent dans le HTML.");
    return;
  }

  // Récupère le dossier actif depuis localStorage ou utilise "pagescss" par défaut
  let activeFolder = localStorage.getItem("activeCssFolder") || "pagecss";

  // Récupère le nom du fichier CSS (ex: "accueil.css")
  let currentHref = themeLink.getAttribute("href");
  let cssFileName = currentHref.split('/').pop();

  if (!cssFileName) {
    console.error("Erreur : impossible de déterminer le nom du fichier CSS.");
    return;
  }

  // Applique le dossier actif
  function applyFolder(folder) {
    themeLink.href = `${folder}/${cssFileName}`;
    console.log("Nouveau chemin CSS :", themeLink.href);
  }

  // Applique le dossier au chargement de la page
  applyFolder(activeFolder);

  // Bouton pour basculer le dossier
  btn.addEventListener("click", () => {
    activeFolder = activeFolder === "pagecss" ? "pagecss2" : "pagecss";
    localStorage.setItem("activeCssFolder", activeFolder);
    applyFolder(activeFolder);
  });
});
