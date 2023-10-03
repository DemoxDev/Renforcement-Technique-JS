class Eleve {
    nom
    prenom
    dateNaissance
    adresse
    codePostal
    ville
    nationalite

    static listeEleves = [];

    constructor(nom, prenom, dateNaissance, adresse, codePostal, ville, nationalite) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.adresse = adresse;
        this.codePostal = codePostal;
        this.ville = ville;
        this.nationalite = nationalite;
        Eleve.listeEleves.push(this);
    }
}