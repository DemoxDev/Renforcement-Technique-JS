import { Jeu } from "./classes/jeu.js";
import { Client } from "./classes/client.js";
import { displayJeu, ToggleDivFormJeux } from "./views/jeuView.js";
import { ajouterJeu, submitFormJeu } from "./controller/jeuController.js";
import { displayClient, ToggleDivFormClients } from "./views/clientView.js";
import { ajouterClientPar, ajouterClientPro, submitFormClient } from "./controller/clientController.js";

ajouterJeu("NieR Replicant v1.22231231", "Toylogic", "Square Enix", "2022", "Action", "30", "Disponible", ["https://image.jeuxvideo.com/medias/161943/1619425076-8539-jaquette-avant.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1113560/capsule_616x353_japanese.jpg?t=1673963725", "https://www.gamersheroes.com/wp-content/uploads/2021/04/NieR-Replicant-Ver1.22-Review.jpg"]);
// ajouterJeu("Elden Ring", "FromSoftware", "Bandai Namco", "2022", "Action", "60", "Disponible", ["https://m.media-amazon.com/images/I/81vt8Zuy8AL._AC_UF1000,1000_QL80_.jpg", "https://www.cnet.com/a/img/resize/43bf7152f39f90a03df23c97a8a7ebb9a09ea520/hub/2022/02/23/f12a8db7-d99b-4b8d-9b09-d84f12661cf7/elden-ring-plakat.jpg?auto=webp&fit=bounds&height=1200&precrop=571,571,x357,y149&width=1200", "https://cdn.thewirecutter.com/wp-content/media/2022/03/elden-ring-2048px-0003.jpg?auto=webp&quality=75&width=1024"]);


ajouterClientPar("Particulier", "M.", "Chris", "x Rue de la Marne", "94800", "Villejuif", "061231145", "mailrandom@xmail.com");
ajouterClientPro("Professionnel", "SEGA", "Je sais plus ou", "75010", "Paris", "015123125", "sega@xmail.com");


console.log(Jeu.listeJeux);

console.log("-----------------------------------");

console.log(Client.listeClients);

console.log("-----------------------------------");


displayJeu();


// document.getElementById("showListeClients").innerHTML = displayClient();

// console.log("-----------------------------------");

// document.forms.ajouterJeuFormulaire.addEventListener("submit", (event) => {
//     submitFormJeu(event)
//     document.getElementById("showListeJeux").innerHTML = displayJeu();
//     console.log(document.getElementById("showListeJeux").innerHTML)
// });

// document.forms.ajouterClientFormulaire.addEventListener("submit", (event) => {
//     submitFormClient(event)
//     document.getElementById("showListeClients").innerHTML = displayClient();
// });

// document.getElementById("toggleAjouterJeuDiv").addEventListener("click", (event) => {
//     ToggleDivFormJeux()
// });

// document.getElementById("toggleAjouterClientDiv").addEventListener("click", (event) => {
//     ToggleDivFormClients()
// });

