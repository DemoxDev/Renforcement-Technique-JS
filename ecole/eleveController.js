import { Eleve } from "./eleves.js"

export const displayListe = (target) => {
    let val = document.createElement("article");

    Eleve.liste.map((value, index) => {
        let content = document.createElement("div");
        content.append(document.createElement("h4").appendChild(document.createTextNode(value.nom+" "+value.prenom)))
        val.appendChild(content);
    })
    console.log(val)
    target.appendChild(val);
}

export const displayEleve = () => {
    let c = document.createElement("div").appendChild(document.createTextNode("Coucou"))
    document.getElementById("listeEleve").append(c)
}