import { Client } from "../classes/client.js";
import { Jeu } from "../classes/jeu.js";
import { displayClient } from "../views/clientView.js";

export const ajouterClientPar = (nom, prenom, adresse, cp, ville, numeroTelephone, email) => {
    Client.listeClients.push(new Client("Particulier", null, nom, prenom, adresse, cp, ville, numeroTelephone, email));
}

export const ajouterClientPro = (nomEntreprise, adresse, cp, ville, numeroTelephone, email) => {
    Client.listeClients.push(new Client("Professionnel", nomEntreprise, null, null, adresse, cp, ville, numeroTelephone, email));
}

export const submitFormClient = (event) => {
    event.preventDefault();
    let obj = document.forms['ajouterClientFormulaire'];
    console.log(obj.type.value)
    if(obj.type.value === "particulier") {
        ajouterClientPar(obj.nom.value, obj.prenom.value, obj.adresse.value, obj.cp.value, obj.ville.value, obj.numeroTelephone.value, obj.email.value);
    }
    else if(obj.type.value === "professionnel") {
        ajouterClientPro(obj.nomEntreprise.value, obj.adresse.value, obj.cp.value, obj.ville.value, obj.numeroTelephone.value, obj.email.value);
    }
    console.log(Client.listeClients)
}