import { Vehicule } from "../classes/vehicule.js";

export const displayVehiculeV4 = () => {
    let html = ""
    for(let i of Vehicule.listeVehicules){
        html += `
        <article class="vehicule">
            <div class="vehiculeTitre">
            <h4 class="vehiculeTitrePrix">${i.marque} ${i.modele} ${i.prixHT}€</h4>
            <h6>${i.kilometrage}km</h6>`
            if(i.disponibilite){
                html += `<h5>Disponible</h5>`
            }
            else {
                html += `<h5>Indisponible</h5>`
            }
            html+=`
            <div class="vehiculeInfos">
            <p class="couleur">Couleur: ${i.couleur}</p>
            <p class="options">Options: ${i.options}</p>
            <p class="motorisation">Motorisation: ${i.motorisation}</p>
            <p class="nombreportes">Nombre de portes: ${i.nombrePortes}</p>
            <p class="details">Details: ${i.details}</p>
            <p class="emplacementvehicule">Emplacement Vehicule: ${i.emplacementVehicule}</p>
            </div>
        </article>
        `
    }
    return html
}