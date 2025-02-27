//Funzionamento barra di ricerca ristoranti
document.addEventListener("DOMContentLoaded", function () {
  // Trova gli elementi del DOM necessari
  const searchInput = document.querySelector(".research_locals"); // Campo di ricerca principale
  const container = document.querySelector(".card-orizzontali"); // Contenitore delle card

  // Array contenente l'elenco dei ristoranti
  const restaurants = [
    {
      name: "L'Angolo Burger Pizza",
      image:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_240/f_auto/q_auto/dpr_1.0/d_it:cuisines:pizza-4.jpg/v1/it/restaurants/244054.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/244054.gif",
      averageRating: 4.4,
      ratingNumber: 200,
      categories: "Pizza",
      AverageDeliveryTime: "50 - 65 min",
      deliveryCost: true,
      fidelityCard: true,
    },
    {
      name: "McDonald's Cairoli",
      image:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/dpr_1.0/d_it:cuisines:hamburger-2.jpg/v1/it/restaurants/239682.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/239682.gif",
      averageRating: 4.1,
      ratingNumber: 200,
      categories: "Hamburger",
      AverageDeliveryTime: "20 - 25 min",
      deliveryCost: false,
      fidelityCard: true,
    },

    {
      name: "KFC",
      image:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/d_it:cuisines:pollo-1.jpg/v1/it/restaurants/253251.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/253251.gif",
      averageRating: 4.6,
      ratingNumber: 200,
      categories: "Pollo",
      AverageDeliveryTime: "15 - 20 min",
      deliveryCost: false,
      fidelityCard: true,
    },

    {
      name: "L'Orso In Teglia Pizzeria",
      image:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/d_it:cuisines:pizza-al-taglio-8.jpg/v1/it/restaurants/272288.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/272288.gif",
      averageRating: 4.8,
      ratingNumber: 35,
      categories: "Pizza al taglio",
      AverageDeliveryTime: "20 - 25 min",
      deliveryCost: false,
      fidelityCard: true,
    },

    {
      name: "Burger King",
      image:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/d_it:cuisines:hamburger-0.jpg/v1/it/restaurants/276440.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/276440.gif",
      averageRating: 4.5,
      ratingNumber: 97,
      categories: "Hamburger",
      AverageDeliveryTime: "15 - 20 min",
      deliveryCost: false,
      fidelityCard: true,
    },

    {
      name: "Ristorante Yoshi",
      image:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/d_it:cuisines:sushi-5.jpg/v1/it/restaurants/225655.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/225655.gif",
      averageRating: 4.4,
      ratingNumber: 200,
      categories: "sushi",
      AverageDeliveryTime: "10 - 15 min",
      deliveryCost: false,
      fidelityCard: false,
    },

    {
      name: "Aloha Poke",
      image:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/d_it:cuisines:poke-2.jpg/v1/it/restaurants/273022.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/273022.gif",
      averageRating: 4.7,
      ratingNumber: 50,
      categories: "Poke",
      AverageDeliveryTime: "40 - 45 min",
      deliveryCost: false,
      fidelityCard: true,
    },

    {
      name: "Take Away",
      image:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/d_it:cuisines:hamburger-3.jpg/v1/it/restaurants/217753.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/217753.gif",
      averageRating: 3.9,
      ratingNumber: 120,
      categories: "rosticceria",
      AverageDeliveryTime: "30 - 35 min",
      deliveryCost: true,
      fidelityCard: true,
    },

    {
      name: "Yogurtissimo",
      image:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/d_it:cuisines:dolci-1.jpg/v1/it/restaurants/237611.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/237611.gif",
      averageRating: 4.1,
      ratingNumber: 183,
      categories: "Dolci",
      AverageDeliveryTime: "25 - 30 min",
      deliveryCost: false,
      fidelityCard: true,
    },
  ];
  // Funzione per creare dinamicamente una card per ogni ristorante
  function creaCard(ristorante) {
    const card = document.createElement("div"); // Crea un nuovo div
    card.className = "contenitore-risultati"; // Assegna la classe CSS

    // Inserisce il contenuto HTML all'interno della card
    card.innerHTML = `
    
        <div class="restaurant-card2">
          <div class="immagine-card-loghi">
            <picture class="immagine-ricerca-ristorante">
              <img src="${ristorante.image}" alt="${ristorante.name}" />
            </picture>
            <img class="logo-ricerca-ristorante" src="${
              ristorante.logo
            }" alt="Logo ${ristorante.name}" />
            ${
              ristorante.fidelityCard
                ? '<div class="fedeltà-ricerca-ristorante"><div class="carta-fedeltà-ristorante">Carta Fedeltà</div></div>'
                : ""
            }
          </div>
          <div class="testo-info-ristoranti">
            <div class="testo-info-nome">${ristorante.name}</div>
            <div class="testo-info-voti_tipo">
              <div class="testo-info-voti">
                 <svg class="info-icona-stella" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                  <path d="m12.288 14.449-4.183-2.197a.219.219 0 0 0-.21 0L3.713 14.45 4.5 9.794a.254.254 0 0 0 0-.193L1.07 6.302l4.673-.682a.228.228 0 0 0 .166-.114L8 1.271l2.091 4.235a.227.227 0 0 0 .167.114l4.672.682-3.386 3.3a.254.254 0 0 0-.061.192l.805 4.655Z"></path>
                </svg>
                ${ristorante.averageRating}
                <div class="ristoranti-quantità-voti">(${
                  ristorante.ratingNumber
                })</div>
              </div>
              <div class="testo-info-tipo">${ristorante.categories}</div>
            </div>

            <div class="testo-info-opzioni_consegna">
              <div class="testo-info-consegna">
                 <svg class="ricerca-icona-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                  <path d="M8 14.781A6.782 6.782 0 1 1 14.781 8 6.79 6.79 0 0 1 8 14.781Zm0-12.25A5.469 5.469 0 1 0 8 13.47 5.469 5.469 0 0 0 8 2.53Z"></path>
                  <path d="m10.284 10.31-2.94-1.759V4.5h1.312v3.308l2.31 1.382-.682 1.12Z"></path>
                </svg>
                ${ristorante.AverageDeliveryTime}
              </div>
                 ${
                   ristorante.deliveryCost === true
                     ? `
                <div class="testo-info-gratuito">
                  <svg class="ricerca-icona-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                    <path d="M12.139 7.405 11 4.159a.218.218 0 0 1 0-.158.246.246 0 0 1 .158-.122l1.216-.447v-1.4l-1.627.613a1.514 1.514 0 0 0-.998 1.934l.359 1.015H9.75a2.433 2.433 0 0 0-1.925.962l-1.207 1.61-1.06-2.135h.692V4.72h-3.5V6.03h1.339l.726 1.461a2.87 2.87 0 0 0-.735-.105 2.826 2.826 0 1 0 2.826 2.818v-.201l1.969-2.66a1.111 1.111 0 0 1 .875-.438h.831l.254.718a2.844 2.844 0 1 0 1.313-.219h-.01ZM4.08 11.719a1.514 1.514 0 1 1 1.514-1.514 1.505 1.505 0 0 1-1.514 1.514Zm7.875 0a1.514 1.514 0 1 1 1.4-.933 1.505 1.505 0 0 1-1.4.933Z"></path>
                  </svg>
                  Consegna gratuita
                </div>`
                     : ristorante.deliveryCost === false &&
                       ristorante.deliveryCost
                     ? `
                <div class="ricerca-ristorante-card-info_consegna">
                  <svg class="ricerca-icona-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                    <path d="M12.139 7.405 11 4.159a.218.218 0 0 1 0-.158.246.246 0 0 1 .158-.122l1.216-.447v-1.4l-1.627.613a1.514 1.514 0 0 0-.998 1.934l.359 1.015H9.75a2.433 2.433 0 0 0-1.925.962l-1.207 1.61-1.06-2.135h.692V4.72h-3.5V6.03h1.339l.726 1.461a2.87 2.87 0 0 0-.735-.105 2.826 2.826 0 1 0 2.826 2.818v-.201l1.969-2.66a1.111 1.111 0 0 1 .875-.438h.831l.254.718a2.844 2.844 0 1 0 1.313-.219h-.01ZM4.08 11.719a1.514 1.514 0 1 1 1.514-1.514 1.505 1.505 0 0 1-1.514 1.514Zm7.875 0a1.514 1.514 0 1 1 1.4-.933 1.505 1.505 0 0 1-1.4.933Z"></path>
                  </svg>
                  ${ristorante.deliveryCost}
                </div>`
                     : ""
                 }
            </div>
          </div>
        </div>
      </a>
    `;

    return card; // Restituisce la card creata
  }

  // Funzione per mostrare e filtrare i ristoranti in base alla ricerca
  function mostraRistoranti(filtro) {
    container.innerHTML = "";
    const risultati = restaurants.filter((ristorante) =>
      ristorante.name.toLowerCase().includes(filtro.toLowerCase())
    );
    risultati.forEach((ristorante) => {
      container.appendChild(creaCard(ristorante));
    });
  }

  mostraRistoranti("");

  //Funzione per nascondere il carosello durante la ricerca
  function nascondiSezioneRistorantiZona() {
    const sezioniRistorantiZona = document.querySelectorAll(
      ".carosello-container"
    );
    sezioniRistorantiZona.forEach((sezione) => {
      sezione.style.display = "none";
    });
  }

  //Funzione per mostrare il carosello
  function mostraSezioneRistorantiZona() {
    const sezioniRistorantiZona = document.querySelectorAll(
      ".carosello-container"
    );
    sezioniRistorantiZona.forEach((sezione) => {
      sezione.style.display = "block";
    });
  }
  //Campo di ricerca
  searchInput.addEventListener("input", (event) => {
    const filtro = event.target.value; // Ottiene il valore dell'input
    mostraRistoranti(filtro); // Filtra i ristoranti in base al testo inserito

    if (filtro.trim() === "") {
      mostraSezioneRistorantiZona(); // Se il campo è vuoto, mostra il carosello
    } else {
      nascondiSezioneRistorantiZona(); // Se c'è del testo, nasconde il carosello
    }
  });
});
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
  if (window.scrollY > 300) {
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
