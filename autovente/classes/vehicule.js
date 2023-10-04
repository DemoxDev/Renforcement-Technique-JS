export class Vehicule {
    idVehicule
    marque
    modele
    annee
    couleur
    kilometrage
    etat
    consommation
    options
    motorisation
    nombrePortes
    prixHT
    emplacementVehicule
    impot
    prixTTC
    details
    disponibilite
    vendeur

    static listeVehicules = [];

    static getListeVehicules = () => {
        return Voiture.listeVehicules;
    }

    static setListeVehicules = (listeVehicules) => {
        this.listeVehicules = listeVehicules;
    }

    constructor(marque, modele, annee, couleur, kilometrage, etat, consommation, options, motorisation, nombrePortes, prixHT, emplacementVehicule, details, disponibilite, vendeur) {
        this.idVehicule = Vehicule.listeVehicules.length
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.couleur = couleur;
        this.kilometrage = kilometrage;
        this.etat = etat;
        this.consommation = consommation;
        this.options = options;
        this.motorisation = motorisation;
        this.nombrePortes = nombrePortes;
        this.prixHT = prixHT;
        this.prixTTC = prixHT + this.calculerImpot();
        this.emplacementVehicule = emplacementVehicule;
        this.impot = 0.2;
        this.details = details;
        this.disponibilite = disponibilite;
        this.vendeur = vendeur;
    }

    calculerImpot() {
        let impot = this.prixHT * 0.2;
        this.impot = impot;
    }

    calculerPrixTTC() {
        let prixTTC = this.prixHT + this.calculerImpot();
        return prixTTC;
    }

    afficherDetails() {
        return this.details;
    }

    modifierDetails(newDetails) {
        this.details = newDetails;
    }

    estDisponible() {
        return this.disponibilite;
    }

    vendre() {
        this.disponibilite = false;
        /*
        const listeVehicules = Voiture.getListeVehicules();
        const index = listeVehicules.indexOf(this);

        if (index !== -1) {
        listeVehicules.splice(index, 1);
        setListeVehicules(listeVehicules);
        } else {
            console.log("Le véhicule n'a pas été trouvé");
        }
        */
    }

    listerOptions() {
        this.options;
    }

}
