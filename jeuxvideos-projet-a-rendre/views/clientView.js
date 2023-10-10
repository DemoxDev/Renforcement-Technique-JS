import { Client } from "../classes/client.js";
import { retirerClient } from "../controller/clientController.js";

export const displayClient = () => {
    let html = ``
    for(let i of Client.listeClients){
        if(i.type === "Particulier") {
            html += `
            <article class="client" style="margin-top: 50px;">
                <div class="clientTitre">
                    <h4 class="clientNomPrenom">${i.nom} ${i.prenom}</h4>
                </div>
                <div class="clientInfos">
                <p class="adresse">Adresse: ${i.adresse}</p>
                <p class="cp">Code Postal: ${i.cp}</p>
                <p class="ville">Ville: ${i.ville}</p>
                <p class="numeroTelephone">Numero de telephone: ${i.numeroTelephone}</p>
                <p class="email">Email: ${i.email}</p>
                <ul class="clientJeux">Jeux: `
                for(let k of i.jeux) {
                    html += `<li>${k.nom}</li>`
                }
                html+=`</ul>
                <button class="retirerClient" data-client-id="${i.idClient}" type="button">Retirer le client</button>
                </div>
                
            </article>
            `
        } else if(i.type === "Professionnel") {
            html += `
            <article class="client" style="margin-top: 50px;">
                <div class="clientTitre">
                    <h4 class="clientNomEntreprise">${i.nomEntreprise}</h4>
                </div>
                <div class="clientInfos">
                <p class="adresse">Adresse: ${i.adresse}</p>
                <p class="cp">Code Postal: ${i.cp}</p>
                <p class="ville">Ville: ${i.ville}</p>
                <p class="numeroTelephone">Numero de telephone: ${i.numeroTelephone}</p>
                <p class="email">Email: ${i.email}</p>
                <ul class="clientJeux">Jeux: `
                for(let k of i.jeux) {
                    html += `<li>${k.nom}</li>`
                }
                html+=`</ul>
                <button class="retirerClient" data-client-id="${i.idClient}" type="button">Retirer le client</button>
                </div>
            </article>
            `
        }
    }
    document.getElementById("showListeClients").innerHTML=html;

    const retirerClientButtons = document.querySelectorAll('.retirerClient');
    retirerClientButtons.forEach(button => {
        button.addEventListener('click', () => {
            const clientId = button.dataset.clientId;
            console.log(clientId)
            if(confirm("Êtes-vous sûr de vouloir retirer ce client ?")) {
                if(retirerClient(clientId)) {
                    alert("Le client a été retiré avec succès.");
                    displayClient();
                } else {
                    alert("Une erreur est survenue lors de la suppression du client.");
                }
            }
        });
    });
}

export const addJeuToClient = (clientId, jeu) => {
    const client = Client.getClientById(clientId);
    if(client) {
        client.addJeu(jeu);
    }
}

export const optionClientForm = () => {
    let html = `<select name="client" id="client">
                <option value="">Aucun</option>`
    for(let i of Client.listeClients) {
        if(i.type === "Professionnel") {
            html += `<option value="${i.idClient}">${i.nomEntreprise}</option>`
        }
        else if(i.type === "Particulier"){
            html += `<option value="${i.idClient}">${i.nom} ${i.prenom}</option>`
        }
    }
    html += `</select>`
    console.log(html)
    return html
}
export const toggleDivFormClients = () => {
    const ajouterClientDiv = document.getElementById("toggleAjouterClientDiv");
  
    if (ajouterClientDiv !== null) {
      ajouterClientDiv.style.display = ajouterClientDiv.style.display === "none" ? "block" : "none";
  
      if (ajouterClientDiv.type === "Particulier") {
        ajouterClientDiv.nomEntreprise.style.display = "block";
        ajouterClientDiv.nom.style.display = "none";
        ajouterClientDiv.prenom.style.display = "none";
        ajouterClientDiv.adresse.style.display = "none";
        ajouterClientDiv.codePostale.style.display = "none";
        ajouterClientDiv.ville.style.display = "none";
        ajouterClientDiv.numeroTelephone.style.display = "none";
        ajouterClientDiv.email.style.display = "none";

      } else if (ajouterClientDiv.type === "Professionnel") {
        ajouterClientDiv.nomEntreprise.style.display = "none";
        ajouterClientDiv.nom.style.display = "block";
        ajouterClientDiv.prenom.style.display = "block";
        ajouterClientDiv.adresse.style.display = "none";
        ajouterClientDiv.codePostale.style.display = "none";
        ajouterClientDiv.ville.style.display = "none";
        ajouterClientDiv.numeroTelephone.style.display = "none";
        ajouterClientDiv.email.style.display = "none"
      }
    }
  }

