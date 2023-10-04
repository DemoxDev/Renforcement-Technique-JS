import { Jeu } from "../classes/jeu.js";

export const displayJeu = () => {
    let html = ``
    for(let i of Jeu.listeJeux){
        html += `
        <article class="jeu">
            <div class="jeuTitre">
            <h4 class="jeuTitrePrix">${i.nom} ${i.developpeur} ${i.prix}€</h4>
            <h6>${i.editeur}</h6>`
            if(i.disponibilite){
                html += `<h5>Disponible</h5>`
            }
            else {
                html += `<h5>Indisponible</h5>`
            }
            html+=`
            </div>
            <div class="jeuInfos">
            <p class="annee">Annee: ${i.annee}</p>
            <p class="genre">Genre: ${i.genre}</p>
            </div>
        </article>
        `
    }
    return html
}