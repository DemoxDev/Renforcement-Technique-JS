import { Jeu } from "../classes/jeu.js";
import { Client } from "../classes/client.js";
import { displayJeu } from "../views/jeuView.js";

export const ajouterJeu = (nom, developpeur, editeur, annee, genre, prix, disponibilite, photos) => {
    Jeu.listeJeux.push(new Jeu(nom, developpeur, editeur, annee, genre, prix, disponibilite, photos));
}

export const getJeuNonVendu = () => {
    return Jeu.listeJeux.filter((value) => {
        return value.disponibilite === true;
    });
}

export const submitFormJeu = (event) => {
    event.preventDefault();
    let obj = {}
    for(let i of event.target.elements) {
        obj[i.name] = i.value    
    }
    if(obj.disponibilite === "Disponible") {
        obj.disponibilite = true
    }
    else {
        obj.disponibilite = false
    }
    console.log(obj)
    ajouterJeu(obj.nom, obj.developpeur, obj.editeur, obj.annee, obj.genre, obj.prix, obj.disponibilite);
}