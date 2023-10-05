import { Client } from "../classes/client.js";

export const displayClient = () => {
    let html = ``
    for(let i of Client.listeClients){
        if(i.type === "Particulier") {
            html += `
            <article class="client">
                <div class="clientTitre">
                    <h4 class="clientNomPrenom">${i.nom} ${i.prenom}</h4>
                </div>
                <div class="clientInfos">
                <p class="adresse">Adresse: ${i.adresse}</p>
                <p class="cp">Code Postal: ${i.cp}</p>
                <p class="ville">Ville: ${i.ville}</p>
                <p class="numeroTelephone">Numero de telephone: ${i.numeroTelephone}</p>
                <p class="email">Email: ${i.email}</p>
                </div>
            </article>
            `
        } else if(i.type === "Professionnel") {
            html += `
            <article class="client">
                <div class="clientTitre">
                    <h4 class="clientNomEntreprise">${i.nomEntreprise}</h4>
                </div>
                <div class="clientInfos">
                <p class="adresse">Adresse: ${i.adresse}</p>
                <p class="cp">Code Postal: ${i.cp}</p>
                <p class="ville">Ville: ${i.ville}</p>
                <p class="numeroTelephone">Numero de telephone: ${i.numeroTelephone}</p>
                <p class="email">Email: ${i.email}</p>
                </div>
            </article>
            `
        }
    }
    return html
}

export const ToggleDivFormClients = () => {
    var T = document.getElementById("ajouterClientDiv");
    if(T.style.display === "none"){
        T.style.display = "block";
    }
    else{
        T.style.display = "none";
    }
}