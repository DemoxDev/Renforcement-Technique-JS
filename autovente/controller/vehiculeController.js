import { Vehicule } from "../classes/vehicule.js";
import { Vendeur } from "../classes/vendeur.js";

export const ajouterVehicule = (marque, modele, annee, couleur, kilometrage, etat, consommation, options, motorisation, nombrePortes, prixHT, emplacementVehicule, impot, prixTTC, details, disponibilite) => {
    Vehicule.listeVehicules.push(new Vehicule(marque, modele, annee, couleur, kilometrage, etat, consommation, options, motorisation, nombrePortes, prixHT, emplacementVehicule, impot, prixTTC, details, disponibilite));
}

export const getVehiculeNonVendu = () => {
    return Vehicule.listeVehicules.filter((value) => {
        return value.disponibilite === true;
    });
}

export const ajouterVendeurVehiculeV1 = (indexVehicule, indexVendeur) => {
    Vehicule.listeVehicules[indexVehicule].vendeur = Vendeur.listeVendeur[indexVendeur];
}

export const ajouterVendeurVehiculeV2 = (idVehicule, idVendeur) => {
    let vehicule = Vehicule.listeVehicules.find((vehicule) => {
        return vehicule.idVehicule === idVehicule;
    })

    let vendeur = Vendeur.listeVendeurs.find((vendeur) => {
        return vendeur.idVendeur === idVendeur;
    })

    vehicule.vendeur = vendeur;
}

export const displayListeVehicules = (target) => {
    let val = document.createElement("article");

    Vehicule.listeVehicules.map((value, index) => {
        let content = document.createElement("div");
        content.append(document.createElement("h4").appendChild(document.createTextNode("Vehicule : "+value.marque+" "+value.modele+" "+value.annee+" "+value.couleur+" "+value.kilometrage+" "+value.etat+" "+value.consommation+" "+value.options+" "+value.motorisation+" "+value.nombrePortes+" "+value.prixHT+" "+value.emplacementVehicule+" "+value.impot+" "+value.prixTTC)))
        val.appendChild(content);
    })
    console.log(val)
    target.appendChild(val);
}

export const displayListeVendeurs = (target) => {
    let val = document.createElement("article");

    Vendeur.listeVendeurs.map((value, index) => {
        let content = document.createElement("div");
        content.append(document.createElement("h4").appendChild(document.createTextNode("Vendeur : "+value.type+" "+" "+value.nomEntreprise+" "+value.nom+" "+value.prenom+" "+value.localisation+" "+value.nationalite+" "+value.numeroTelephone+" "+value.email+" "+value.couleur)))
        val.appendChild(content);
    })
    console.log(val)
    target.appendChild(val);
}

export const displayVehicules = () => {
    let c = document.createElement("div").appendChild(document.createTextNode("Coucou"))
    document.getElementById("vehicule").append(c)
}