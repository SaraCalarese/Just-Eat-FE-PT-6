// Funzionamento bottoni carosello
const nextButton = document.querySelector(".btn-destra");
const leftButton = document.querySelector(".btn-sinistra");
const caroselloWrapped = document.querySelector(".carosello-wrapped");

let scrolled = 0; //  tiene traccia della posizione dello scroll

// Mostra il bottone sinistra quando si inizia a scorrere
nextButton.addEventListener("click", () => {
  caroselloWrapped.scrollBy({
    left: 355, // La larghezza per ogni scroll
    behavior: "smooth",
  });

  scrolled += 355; // Aggiunge la distanza di scroll
  toggleLeftButton(); // Controlla se mostrare il bottone sinistra
});

// Bottone a sinistra
leftButton.addEventListener("click", () => {
  caroselloWrapped.scrollTo({
    left: 0, // Torna all'inizio
    behavior: "smooth",
  });

  scrolled = 0; // Reset della posizione
  toggleLeftButton(); // Controlla se nascondere il bottone sinistra
});

// Funzione per mostrare/nascondere il bottone a sinistra
function toggleLeftButton() {
  if (scrolled > 0) {
    leftButton.classList.add("visible"); // Aggiungi la classe per farlo apparire
  } else {
    leftButton.classList.remove("visible"); // Rimuovi la classe per nasconderlo
  }
}

// Imposta il bottone a sinistra come nascosto all'inizio
leftButton.classList.remove("visible");

//funzionalità bottone torna su

const backToTopButton = document.querySelector(".btn-torna-su");

// Mostra il bottone quando l'utente scrolla verso il basso
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // Mostra il bottone dopo 50px di scroll
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
