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

export const getClientById = (id) => {
    return Client.listeClients.find(client => client.idClient === parseInt(id));
}

export const addJeu = (idClient, jeu) => {
    const client = getClientById(idClient);
    if(client) {
        const jeuIndex = Jeu.listeJeux.findIndex(j => j.idJeu === jeu.idJeu);
        if(Jeu.listeJeux[jeuIndex].disponibilite === "Disponible") {
            if(jeuIndex !== -1 && Jeu.listeJeux[jeuIndex].quantite > 0) {
                client.jeux.push(jeu);
                console.log("Quantité jeu:", Jeu.listeJeux[jeuIndex].quantite)
                Jeu.listeJeux[jeuIndex].quantite--;
                return true;
            } else if (Jeu.listeJeux[jeuIndex].quantite <= 0) {
                alert("Le jeu n'est plus disponible");
                return false;
            }
        } else { alert("Le jeu n'est plus disponible"); return false; }
    }
    return false;
}

export const retirerClient = (idClient) => {
    const client = getClientById(idClient);
    console.log(client)
    if(client) {
        const clientIndex = Client.listeClients.indexOf(client);
        console.log(clientIndex)
        Client.listeClients.splice(clientIndex, 1);
        return true;
    }
    return false;
}