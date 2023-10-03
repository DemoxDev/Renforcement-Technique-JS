import { Vehicule } from "../classes/vehicule.js";
import { Vendeur } from "../classes/vendeur.js";

export const ajouterVendeurPro = (societe, localisation, numeroTelephone, email) => {
    Vendeur.listeVendeurs.push(new Vendeur("Professionnel", societe, null, null, localisation, null, numeroTelephone, email, null, "Test"));
}

export const ajouterVendeurPar = (nom, prenom, localisation, nationalite, numeroTelephone, email) => {
    Vendeur.listeVendeurs.push(new Vendeur("Particulier", null, nom, prenom, localisation, nationalite, numeroTelephone, email, null, "Test"));
}

export const submitFormVendeur = (event) => {
    event.preventDefault();
    let obj = {}
    for(let i of event.target.elements) {
        obj[i.name] = i.value    
    }
    if(obj.type === "Professionnel") {
        
    }
    else {
        obj.disponibilite = false
    }
    console.log(obj)
    ajouterVehicule(obj.marque, obj.modele, obj.annee, obj.couleur,
        obj.kilometrage, obj.etat, obj.consommation, obj.options, obj.motorisation,
        obj.nombrePortes, obj.prixHT, obj.emplacementVehicule,
        obj.details, obj.disponibilite);
}