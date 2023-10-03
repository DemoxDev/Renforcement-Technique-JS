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

export const displayEleveV3=(target)=>{
    let html = "<section>"
    for(let i of Eleve.liste) {
        html = html + "<article class=\"eleve\"><h4 class=\"eleve-titre\">"+i.nom+" "+i.prenom+"</h4>"
        html += "<p class=\"eleve-adresse\">"+i.adresse+"<br>"+i.codePostal+" "+i.ville+"</p></article>"
    }
    html=html+section
    console.log(html)
    target.innerHTML=html;
}