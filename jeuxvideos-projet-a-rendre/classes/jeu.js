export class Jeu {
    idJeu
    nom
    developpeur
    editeur
    annee
    genre
    prix
    disponibilite
    photos = []

    static listeJeux = [];

    constructor(nom, developpeur, editeur, annee, genre, prix, disponibilite, photos) {
        this.idJeu = Jeu.listeJeux.length;
        this.nom = nom;
        this.developpeur = developpeur;
        this.editeur = editeur;
        this.annee = annee;
        this.genre = genre;
        this.prix = prix;
        this.disponibilite = disponibilite
        this.photos = photos
    }

}
