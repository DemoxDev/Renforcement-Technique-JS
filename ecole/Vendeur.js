import Voiture from "./Voiture.js"

class Vendeur {
    static listeVendeurs = [];
    static listeVehicules = Voiture.getListeVehicules();

    constructor(type, nomEntreprise, nom, prenom, localisation, nationalite, contact, inventaire, info ) {
        this.type = type;
        this.nomEntreprise = nomEntreprise;
        this.nom = nom;
        this.prenom = prenom;
        this.localisation = localisation;
        this.nationalite = nationalite;
        this.contact = contact;
        this.inventaire = inventaire;
        this.info = info;
        Vendeur.listeVendeurs.push(this);
    }

    ajouterVoiture(voiture) {
        this.inventaire.push(voiture);
    }

    retirerVoiture(voiture) {
        this.inventaire.splice(this.inventaire.indexOf(voiture), 1);
    }

    rechercherVoiture(critere) {
        return listeVehicules.filter(vehicule => {
            const marqueMatch = critere.marque.toLowerCase() ? vehicule.marque.toLowerCase() === critere.marque.toLowerCase() : true;
            const modeleMatch = critere.modele.toLowerCase() ? vehicule.modele.toLowerCase() === critere.modele.toLowerCase() : true;
            const prixMatch =
                critere.minPrice && critere.maxPrice
                ? vehicule.prixHT >= critere.minPrice && vehicule.prixHT <= critere.maxPrice
                : true;
            const anneeMatch = critere.annee ? vehicule.annee === critere.annee : true;
            const couleurMatch = critere.couleur.toLowerCase() ? vehicule.couleur.toLowerCase() === critere.couleur.toLowerCase() : true;
            const kilometrageMatch = critere.kilometrageMin && critere.kilometrageMax ? vehicule.kilometrage >= critere.kilometrageMin && vehicule.kilometrage <= critere.kilometrageMax : true;
            const etatMatch = critere.etat.toLowerCase() ? vehicule.etat.toLowerCase() === critere.etat.toLowerCase() : true;
            const consommationMatch = critere.consommation.toLowerCase() ? vehicule.consommation.toLowerCase() === critere.consommation.toLowerCase() : true;
            const optionsMatch = critere.options.toLowerCase() ? vehicule.options.toLowerCase() === critere.options.toLowerCase() : true;
            const motorisationMatch = critere.motorisation.toLowerCase() ? vehicule.motorisation.toLowerCase() === critere.motorisation.toLowerCase() : true;
            const nombrePortesMatch = critere.nombrePortes ? vehicule.nombrePortes === critere.nombrePortes : true;
            const emplacementVehiculeMatch = critere.emplacementVehicule.toLowerCase() ? vehicule.emplacementVehicule.toLowerCase() === critere.emplacementVehicule.toLowerCase() : true;
            const detailsMatch = critere.details.toLowerCase() ? vehicule.details.toLowerCase() === critere.details.toLowerCase() : true;
            const disponibiliteMatch = critere.disponibilite ? vehicule.disponibilite === critere.disponibilite : true;
            return marqueMatch && modeleMatch && prixMatch && anneeMatch && couleurMatch && kilometrageMatch && etatMatch && consommationMatch && optionsMatch && motorisationMatch && nombrePortesMatch && emplacementVehiculeMatch && detailsMatch && disponibiliteMatch;
          });

    }

    modifierInfo(nouvelleInfo) {
        this.info = nouvelleInfo;
    }

    afficherInfo() {
        return this.info;
    }

    afficherInventaire() {
        return this.inventaire;
    }

    afficherVoituresVendues() {
        return this.afficherInventaire().filter(voiture => voiture.disponibilite === false);
    }

}
