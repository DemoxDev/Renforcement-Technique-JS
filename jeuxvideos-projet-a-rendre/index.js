import { Jeu } from "./classes/jeu.js";
import { Client } from "./classes/client.js";
import { displayJeu, toggleDivFormJeux } from "./views/jeuView.js";
import { ajouterJeu, submitFormJeu } from "./controller/jeuController.js";
import { displayClient, toggleDivFormClients, addJeuToClient } from "./views/clientView.js";
import { ajouterClientPar, ajouterClientPro, submitFormClient } from "./controller/clientController.js";

ajouterJeu("NieR Replicant v1.22231231", "Toylogic", "Square Enix", "2022", "Action", 30, "Disponible", ["./img/Nier_Replicant_Cover_PS4.jpg", "./img/Nier_Replicant_2.jpg", "./img/Nier_Replicant_3.jpg"], 100);
ajouterJeu("Elden Ring", "FromSoftware", "Bandai Namco", "2022", "Action", 60, "Disponible", ["./img/Elden_Ring_Box_Art.jpg", "./img/Elden_Ring_2.jpg", "./img/Elden_Ring_3.jpg"], 250);


ajouterClientPar("M.", "Chris", "x Rue de la Marne", "94800", "Villejuif", "061231145", "mailrandom@xmail.com");
ajouterClientPro("SEGA", "Je sais plus ou", "75010", "Paris", "015123125", "sega@xmail.com");


console.log(Jeu.listeJeux);

console.log("-----------------------------------");

console.log(Client.listeClients);

console.log("-----------------------------------");


displayJeu();
displayClient();


document.forms.ajouterJeuFormulaire.addEventListener("submit", (event) => {
    submitFormJeu(event)
    displayJeu();
    console.log(document.getElementById("showListeJeux").innerHTML)
});

document.forms.ajouterClientFormulaire.addEventListener("submit", (event) => {
    submitFormClient(event)
    document.getElementById("showListeClients").innerHTML = displayClient();
});

document.getElementById("buttonToggleAjouterJeuDiv").addEventListener("click", (event) => {
    console.log("OK")
    toggleDivFormJeux()
});

document.getElementById("buttonToggleAjouterClientDiv").addEventListener("click", (event) => {
    toggleDivFormClients()
});

