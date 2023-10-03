import { Vendeur } from "../classes/vendeur.js";

export const displayVendeur = () => {
    let html = ``
    for(let i of Vendeur.listeVendeurs) {
        if(i.type === "Particulier") {
        html+=`
        <article class="vendeur">
            <div class="vendeurTitre">
                <h4>${i.nom} ${i.prenom}</h4>
                <h6>Vendeur : ${i.type}</h6>
            </div>
            <div class="vendeurInfos">
                <p class="localisation">Localisation : ${i.localisation}</p>
                <p class="telephone">Téléphone : ${i.numeroTelephone}</p>
                <p class="email">Email : ${i.email}</p>
            </div>
        </article>
        `
        } else {
            html+=`
        <article class="vendeur">
            <div class="vendeurTitre">
                <h4>${i.nomEntreprise}</h4>
                <h6>Vendeur : ${i.type}</h6>
            </div>
            <div class="vendeurInfos">
                <p class="localisation">Localisation : ${i.localisation}</p>
                <p class="telephone">Téléphone : ${i.numeroTelephone}</p>
                <p class="email">Email : ${i.email}</p>
            </div>
        </article>
        `
        }
    }
    return html
}