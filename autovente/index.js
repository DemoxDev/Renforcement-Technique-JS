import { Vehicule } from "./classes/vehicule.js";
import { Vendeur } from "./classes/vendeur.js";
import { ajouterVehicule, ajouterVendeurVehiculeV2, getVehiculeNonVendu, submitFormVehicule } from "./controller/vehiculeController.js";
import { ajouterVendeurPro, ajouterVendeurPar, submitFormVendeur, checkFormAjouterVendeur } from "./controller/vendeurController.js";
import { displayVendeur, optionVendeurForm } from "./views/vendeurView.js";
import { displayVehiculeV4 } from "./views/vehiculeView.js";


ajouterVehicule("BMW","M3","2004","Gris","150000", "Occasion", "2L/100km",
["Cabriolet","CSL","Sports"],"Inline 6", "2", "30000", "13 Pl. Paris 75013 Paris", "Véhicule de collection", true);

ajouterVehicule("Volkswagen","Golf","2006","Rouge","125000", "Occasion", "3L/100km",
["GTI","TSI","Clubsport"],"V6", "4", "20000", "9 Rue de la Ferté 75017 Paris", "Véhicule de famille / sport", false);

console.log(Vehicule.listeVehicules);

console.log("-----------------------------------");

console.log(getVehiculeNonVendu());

console.log("-----------------------------------");

ajouterVendeurPro("Autospère","Île-de-France","0102131451","contact@auto-sphere.com");
ajouterVendeurPar("Jean","Dupont","Paris","Francaise","0617115134","jeandupont@gmail.com","Test");

console.log(Vendeur.listeVendeurs);

console.log("-----------------------------------");

// displayListeVehicules(document.getElementById("listeVehicules"));

// console.log("-----------------------------------");

ajouterVendeurVehiculeV2(1, 2)

document.getElementById("showListeVehicules").innerHTML = displayVehiculeV4();

document.getElementById("showListeVendeurs").innerHTML = displayVendeur();

document.forms.ajouterVehiculeFormulaire.addEventListener("submit", (event) => {
    submitFormVehicule(event)
    document.getElementById("showListeVehicules").innerHTML = displayVehiculeV4();
});

document.forms.ajouterVendeurFormulaire.addEventListener("submit", (event) => {
    submitFormVendeur(event)
    document.getElementById("showListeVendeurs").innerHTML = displayVendeur();
});

document.forms.ajouterVendeurFormulaire.type.addEventListener("change", (event) => {
    if(event.target.value === "aucun"){
        document.forms.ajouterVendeurFormulaire.nom.disabled = true;
        document.forms.ajouterVendeurFormulaire.prenom.disabled = true;
        document.forms.ajouterVendeurFormulaire.nationalite.disabled = true;
        document.forms.ajouterVendeurFormulaire.societe.disabled = true;
    }
    else if(event.target.value === "professionnel") {
        document.forms.ajouterVendeurFormulaire.societe.disabled = false;
        document.forms.ajouterVendeurFormulaire.nom.disabled = true;
        document.forms.ajouterVendeurFormulaire.prenom.disabled = true;
        document.forms.ajouterVendeurFormulaire.nationalite.disabled = true;
    }
    else {
        document.forms.ajouterVendeurFormulaire.societe.disabled = true;
        document.forms.ajouterVendeurFormulaire.nom.disabled = false;
        document.forms.ajouterVendeurFormulaire.prenom.disabled = false;
        document.forms.ajouterVendeurFormulaire.nationalite.disabled = false;
    }
})


let ajouterVendeur = {}

document.forms.ajouterVendeurFormulaire.submit.disabled = true

for (let i of document.forms.ajouterVendeurFormulaire) {
    i.addEventListener("change", (event) => {
        ajouterVendeur[event.target.name] = event.target.value
        document.forms.ajouterVendeurFormulaire.submit.disabled = !checkFormAjouterVendeur(ajouterVendeur);
    })
}

document.forms.ajouterVendeurFormulaire.addEventListener("submit", (event) => {
    console.log(document.forms.ajouterVendeurFormulaire.prenom.value);
    event.preventDefault()
    if(document.forms.ajouterVendeurFormulaire.type === "Particulier") {
        ajouterVendeurPar(document.forms.ajouterVendeurFormulaire.nom.value,
            document.forms.ajouterVendeurFormulaire.prenom.value,
            document.forms.ajouterVendeurFormulaire.localisation.value,
            document.forms.ajouterVendeurFormulaire.nationalite.value,
            document.forms.ajouterVendeurFormulaire.numeroTelephone.value,
            document.forms.ajouterVendeurFormulaire.email.value);
    }
    if(document.forms.ajouterVendeurFormulaire.type === "Professionnel") {
        ajouterVendeurPro(document.forms.ajouterVendeurFormulaire.societe.value,
            document.forms.ajouterVendeurFormulaire.localisation.value,
            document.forms.ajouterVendeurFormulaire.numeroTelephone.value,
            document.forms.ajouterVendeurFormulaire.email.value);
    }
    document.forms.ajouterVendeurFormulaire.reset()
    document.getElementById("showListeVendeurs").innerHTML = displayVendeur();
    ajouterVendeur = {}
})

document.querySelector('label[for="vendeur"]').insertAdjacentHTML('afterend', optionVendeurForm());
// console.log(document.documentElement.innerHTML)