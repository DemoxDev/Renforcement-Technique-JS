export class Client {
    idClient
    type
    nomEntreprise
    nom
    prenom
    adresse
    cp
    ville
    numeroTelephone
    email
    jeux
    
    static listeClients = [];

    constructor(type, nomEntreprise, nom, prenom, adresse, cp, ville, numeroTelephone, email) {
        this.idClient = Client.listeClients.length
        this.type = type;
        this.nomEntreprise = nomEntreprise;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.cp = cp;
        this.ville = ville;
        this.numeroTelephone = numeroTelephone;
        this.email = email;
        this.jeux = []
    }
    
}
