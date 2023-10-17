import { Jeu } from "../classes/jeu.js";
import { Client } from "../classes/client.js";
import { displayJeu } from "../views/jeuView.js";

export const ajouterJeu = (nom, developpeur, editeur, annee, genre, prix, disponibilite, photos, quantite) => {
    Jeu.listeJeux.push(new Jeu(nom, developpeur, editeur, annee, genre, prix, disponibilite, photos, quantite));
}

export const getJeuNonVendu = () => {
    return Jeu.listeJeux.filter((value) => {
        return value.disponibilite === true;
    });
}

export const submitFormJeu = (event) => {
    event.preventDefault();
    console.log("submitFormJeu appelé")
    let obj = {}
    for(let i of event.target.elements) {
        if (i.type === 'file') {
            obj[i.name] = Array.from(i.files).map(file => URL.createObjectURL(file));
        } else if (i.type === 'checkbox') {
            obj[i.name] = i.checked;
        } else {
            obj[i.name] = i.value;
        }
    }
    
    console.log(obj);
    ajouterJeu(obj.nom, obj.developpeur, obj.editeur, obj.annee, obj.genre, obj.prix, obj.disponibilite, obj.images, obj.quantite);
}



export const getJeuById = (id) => {
    return Jeu.listeJeux.find(jeu => jeu.idJeu === parseInt(id));
}

export const retirerJeu = (idJeu) => {
    const jeu = getJeuById(idJeu);
    console.log(jeu)
    if(jeu) {
        const jeuIndex = Jeu.listeJeux.indexOf(jeu);
        console.log(jeuIndex)
        Jeu.listeJeux.splice(jeuIndex, 1);
        return true;
    }
    return false;
}