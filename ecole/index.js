import { Eleve } from "./eleves.js"

let a = new Eleve("Bissour", "Melvin", "15/10/1992", "1 avenue brocolie", "75020", "Paris", "Français")
let b = new Eleve("Ouaki", "Valentin", "15/09/1992", "1 avenue brocolie", "75020", "Paris", "Français")

Eleve.liste.push(a);
Eleve.liste.push(b);

fo(let i of document.forms.ajouterEleve) {
    console.log(i.name);
}

// document.forms.ajouterEleve.addEventListener("submit", (

const submitForm = (event) => {
    console.log(event);
    event.preventDefault();
    let obj = {}
    for(let i of event.target.elements) {
        obj[i.name] = i.value    
    }
    console.log(obj)
    Eleve.ajouterEleve(obj.nom, obj.prenom, obj.dateNaissance, obj.adresse, obj.codePostal, obj.ville, obj.nationalite);
    displayEleveV3();
}