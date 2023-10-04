import { Jeu } from "./classes/jeu.js";
import { Client } from "./classes/client.js";
import { displayJeu } from "./views/jeuView.js";
import { ajouterJeu, submitFormJeu } from "./controller/jeuController.js";
import { displayClient } from "./views/clientView.js";
import { ajouterClientPar, ajouterClientPro, submitFormClient } from "./controller/clientController.js";

ajouterJeu("NieR Replicant v1.22231231", "Toylogic", "Square Enix", "2022", "Action", "30", "Disponible");

ajouterClientPar("Particulier", "M.", "Chris", "x Rue de la Marne", "94800", "Villejuif", "061231145", "mailrandom@xmail.com");
ajouterClientPro("Professionnel", "SEGA", "Je sais plus ou", "75010", "Paris", "015123125", "sega@xmail.com");


console.log(Jeu.listeJeux);

console.log("-----------------------------------");

console.log(Client.listeClients);

console.log("-----------------------------------");

document.getElementById("showListeJeux").innerHTML = displayJeu();
console.log(document.getElementById("showListeJeux").innerHTML)
document.getElementById("showListeClients").innerHTML = displayClient();

console.log("-----------------------------------");

document.forms.ajouterJeuFormulaire.addEventListener("submit", (event) => {
    submitFormJeu(event)
    document.getElementById("showListeJeux").innerHTML = displayJeu();
    console.log(document.getElementById("showListeJeux").innerHTML)
});

document.forms.ajouterClientFormulaire.addEventListener("submit", (event) => {
    submitFormClient(event)
    document.getElementById("showListeClients").innerHTML = displayClient();
});
