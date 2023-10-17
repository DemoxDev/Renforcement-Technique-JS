import { Jeu } from "../classes/jeu.js";
import { Slider } from "../classes/slider.js"
import { Client } from "../classes/client.js";
import { getJeuById, retirerJeu } from "../controller/jeuController.js";
import { getClientById, addJeu } from "../controller/clientController.js";
import { displayClient } from "./clientView.js";

export const displayJeu = () => {
    let html = `<div class="relative w-[800px] mx-auto">`
    let sliders = [];
    let sliderIndex = 0;
    for(let i of Jeu.listeJeux){
        html += `<div class="jeu-card bg-white rounded-lg shadow-md p-4">`
            html += `<div class="slider" style="">`
            html += `
            <div class="slide relative">
                <img id="image${sliderIndex}" src="${i.photos && i.photos[0]}" alt="" style="width: 200px; height: 250px;" class="transition-all ease-in-out duration-1000 transform translate-x-0" class="center"/>
                <!-- Le bouton < -->
                <a class="absolute-button p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
                    onclick="sliders[${sliderIndex}].moveSlide(-1)">❮</a>
        
                <!-- Le bouton > -->
                <a class="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
                    onclick="sliders[${sliderIndex}].moveSlide(1)">❯</a>
            </div>
            `
        
            html += `
            <div class="flex justify-center items-center space-x-5" style="margin-top: 250px">
            `
            for (let j = 0; j < (i.photos && i.photos.length); j++) {
                html += `
                <div class="dot w-4 h-4 rounded-full cursor-pointer" onclick="sliders[${sliderIndex}].currentSlide(${j})"></div>
                `
            }
            html += `
            </div>
            <article class="jeu ">
                <div class="jeuTitre">
                    <h4 class="text-2xl">${i.nom}</h4>
                    <h4 class="text-xl">${i.prix}€</h4>
                    <h4 class="text-xl">${i.developpeur}</h4>
                    <h6>${i.editeur}</h6>
                </div>
                <div class="jeuInfos">
                    <p class="annee">Annee: ${i.annee}</p>
                    <p class="genre">Genre: ${i.genre}</p>
                    <h5>${i.disponibilite ? "Disponible" : "Indisponible"}</h5>
                    <p class"quantite">Quantite: ${i.quantite}</p>
                </div>
                <div class="jeuActions">
                    <select id="clientSelect-${i.idJeu}" title="Selectionner un client" class="border border-gray-300">
                        <option value="">Selectionner un client</option>
                        ${Client.listeClients.map(client => `<option value="${client.idClient}">${client.type === 'Particulier' ? client.nom + ' ' + client.prenom : client.nomEntreprise}</option>`).join('')}
                    </select>
                    <button class="addJeu" data-jeu-id="${i.idJeu}" type="button">Ajouter au client</button>
                    <button class="retirerJeu" data-jeu-id="${i.idJeu}" type="button">Retirer le jeu</button>            </div>
            </article>
            </div>
        </div>
        `
        sliders.push(new Slider(i.photos, 0, sliders.length));
        sliderIndex++;
    }
    html += `</div>`
    document.getElementById("showListeJeux").innerHTML=html;
    window.sliders = sliders;

    const addJeuButtons = document.querySelectorAll('.addJeu');
    addJeuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const jeuId = button.dataset.jeuId;
        const clientId = document.getElementById(`clientSelect-${jeuId}`).value;
        console.log(document.getElementById("clientSelect"))
        console.log(clientId)
        if(clientId) {
            const client = getClientById(clientId);
            console.log("clientId:", clientId)
            if(client) {
                const jeu = getJeuById(jeuId);
                console.log("jeuId:", jeuId)
                if(jeu) {
                    if (addJeu(clientId, jeu)){
                        if(client.type === "Particulier") {
                            alert(`Le jeu ${jeu.nom} a été ajouté au client ${client.nom} ${client.prenom}`);
                        }
                        else if(client.type === "Professionnel") {
                            alert(`Le jeu ${jeu.nom} a été ajouté au client ${client.nomEntreprise}`);
                        }
                        displayClient();
                        displayJeu();
                    }
                }
            }
        } else {
            alert("Veuillez sélectionner un client avant d'ajouter un jeu.");
        }
        console.log(Client.listeClients);
        });
    });

    const retirerJeuButtons = document.querySelectorAll('.retirerJeu');
    retirerJeuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const jeuId = button.dataset.jeuId;
            console.log(jeuId)
            if(confirm("Êtes-vous sûr de vouloir retirer ce jeu ?")) {
                if(retirerJeu(jeuId)) {
                    alert("Le jeu a été retiré avec succès.");
                    displayJeu();
                } else {
                    alert("Une erreur est survenue lors de la suppression du jeu.");
                }
            }
        });
    });
    
}

export const toggleDivFormJeux = () => {
    var ajouterJeuDiv = document.getElementById("toggleAjouterJeuDiv");
  if (ajouterJeuDiv !== null) {
    ajouterJeuDiv.style.display = ajouterJeuDiv.style.display === "none" ? "block" : "none";
  }
}