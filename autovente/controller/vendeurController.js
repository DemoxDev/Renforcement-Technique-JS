import { Vehicule } from "../classes/vehicule.js";
import { Vendeur } from "../classes/vendeur.js";

export const ajouterVendeurPro = (societe, localisation, numeroTelephone, email) => {
    Vendeur.listeVendeurs.push(new Vendeur("Professionnel", societe, null, null, localisation, null, numeroTelephone, email, null, "Test"));
}

export const ajouterVendeurPar = (nom, prenom, localisation, nationalite, numeroTelephone, email) => {
    Vendeur.listeVendeurs.push(new Vendeur("Particulier", null, nom, prenom, localisation, nationalite, numeroTelephone, email, null, "Test"));
}
