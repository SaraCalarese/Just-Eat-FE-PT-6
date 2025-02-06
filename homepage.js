// bottone - hamburger-menu'

const bottoneHamburger = document.querySelector(".btn-hamburger");
const showTendina = document.querySelector(".tendina-container");
const showTendinaBackdrop = document.querySelector(".tendina-backdrop");

bottoneHamburger.addEventListener("click", function () {
  showTendina.classList.toggle("show-tendina");
  showTendinaBackdrop.classList.toggle("show-tendina-backdrop");
});

document
  .querySelector(".tendina")
  .addEventListener("click", function (clickTendina) {
    if (clickTendina.target === this) {
      showTendina.classList.remove("show-tendina");
      showTendinaBackdrop.classList.remove("show-tendina-backdrop");
    }
  });

// script per chiudere la tendina hamburger menu' dalla x di dentro
const chiudiBtn = document.getElementById("chiudi-tendina-hamburger");

chiudiBtn.addEventListener("click", () => {
  showTendina.classList.remove("show-tendina");
  showTendinaBackdrop.classList.remove("show-tendina-backdrop");
});

// bottone - lingue
const bottoneLingue = document.querySelector(`.btn-italia`);
const showTendinaLingue = document.querySelector(`.tendina-lingue-container`);

bottoneLingue.addEventListener(`click`, function () {
  showTendinaLingue.classList.toggle(`show-tendina-lingue`);
});

document.addEventListener("click", function (event) {
  // Controlla se il clic è avvenuto fuori dalla tendina e dal bottone
  if (
    !showTendinaLingue.contains(event.target) &&
    !bottoneLingue.contains(event.target)
  ) {
    showTendinaLingue.classList.remove("show-tendina-lingue");
  }
});

//funzionalità bottone torna su

const backToTopButton = document.querySelector(".btn-torna-su");

// Mostra il bottone quando l'utente scrolla verso il basso
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // Mostra il bottone dopo 300px di scroll
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Torna in cima quando il bottone viene cliccato
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Scroll animato
  });
});
