import { Vehicule } from "../classes/vehicule.js";
import { Vendeur } from "../classes/vendeur.js";
import { displayVehiculeV4 } from "../views/vehiculeView.js";

export const ajouterVehicule = (marque, modele, annee, couleur, kilometrage, etat, consommation, options, motorisation, nombrePortes, prixHT, emplacementVehicule, details, disponibilite) => {
    Vehicule.listeVehicules.push(new Vehicule(marque, modele, annee, couleur, kilometrage, etat, consommation, options, motorisation, nombrePortes, prixHT, emplacementVehicule, details, disponibilite));
}

export const getVehiculeNonVendu = () => {
    return Vehicule.listeVehicules.filter((value) => {
        return value.disponibilite === true;
    });
}

export const ajouterVendeurVehiculeV1 = (indexVehicule, indexVendeur) => {
    Vehicule.listeVehicules[indexVehicule].vendeur = Vendeur.listeVendeur[indexVendeur];
}

export const ajouterVendeurVehiculeV2 = (idVehicule, idVendeur) => {
    let vehicule = Vehicule.listeVehicules.find((vehicule) => {
        return vehicule.idVehicule === idVehicule;
    })

    let vendeur = Vendeur.listeVendeurs.find((vendeur) => {
        return vendeur.idVendeur === idVendeur;
    })

    vehicule.vendeur = vendeur;
}

export const displayListeVehicules = (target) => {
    let val = document.createElement("article");
    val.setAttribute("class", "listeVehicules");

    Vehicule.listeVehicules.map((value, index) => {
        let content = document.createElement("div");
        content.setAttribute("class", "vehicule");

        let h4 = document.createElement("h4");
        h4.setAttribute("class", "typeVehicule");
        h4.appendChild(document.createTextNode("Vehicule :"));
        content.append(h4);

        let marque = document.createElement("p");
        marque.setAttribute("class", "marque");
        marque.appendChild(document.createTextNode("Marque: " + value.marque));
        content.append(marque);

        let modele = document.createElement("p");
        modele.setAttribute("class", "modele");
        modele.appendChild(document.createTextNode("Modele: " + value.modele));
        content.append(modele);

        let annee = document.createElement("p");
        annee.setAttribute("class", "annee");
        annee.appendChild(document.createTextNode("Annee: " + value.annee));
        content.append(annee);

        let couleur = document.createElement("p");
        couleur.setAttribute("class", "couleur");
        couleur.appendChild(document.createTextNode("Couleur: " + value.couleur));
        content.append(couleur);

        let kilometrage = document.createElement("p");
        kilometrage.setAttribute("class", "kilometrage");
        kilometrage.appendChild(document.createTextNode("Kilometrage: " + value.kilometrage+"km"));
        content.append(kilometrage);

        let prixHT = document.createElement("p");
        prixHT.setAttribute("class", "prixHT");
        prixHT.appendChild(document.createTextNode("Prix HT: " + value.prixHT+ "€"));
        content.append(prixHT);

        let prixTTC = document.createElement("p");
        prixTTC.setAttribute("class", "prixTTC");
        prixTTC.appendChild(document.createTextNode("Prix TTC: " + (parseInt(value.prixHT)*0.2 + parseInt(value.prixHT)) + "€"));
        content.append(prixTTC);

        let disponibilite = document.createElement("p");
        disponibilite.setAttribute("class", "disponibilite");
        if(value.disponibilite === true) {
            disponibilite.appendChild(document.createTextNode("Disponibilite: Disponible"));
        }
        else {
            disponibilite.appendChild(document.createTextNode("Disponibilite: Indisponible"));
        }
        content.append(disponibilite);

        let emplacementVehicule = document.createElement("p");
        emplacementVehicule.setAttribute("class", "emplacementVehicule");
        emplacementVehicule.appendChild(document.createTextNode("Emplacement vehicule: " + value.emplacementVehicule));
        content.append(emplacementVehicule);

        let options = document.createElement("p");
        options.setAttribute("class", "options");
        options.appendChild(document.createTextNode("Options: " + value.options));
        content.append(options);

        let motorisation = document.createElement("p");
        motorisation.setAttribute("class", "motorisation");
        motorisation.appendChild(document.createTextNode("Motorisation: " + value.motorisation));
        content.append(motorisation);

        let nombrePortes = document.createElement("p");
        nombrePortes.setAttribute("class", "nombrePortes");
        nombrePortes.appendChild(document.createTextNode("Nombre portes: " + value.nombrePortes));
        content.append(nombrePortes);

        val.appendChild(content);
    })
    console.log(val)
    target.appendChild(val);
}

export const displayListeVendeurs = (target) => {
    let val = document.createElement("article");
    val.setAttribute("class", "vendeurs");

    Vendeur.listeVendeurs.map((value, index) => {
        let content = document.createElement("div");
        content.setAttribute("class", "listeVendeurs");

        let h4 = document.createElement("h4");
        h4.setAttribute("class", "vendeur");
        h4.appendChild(document.createTextNode("Vendeur :"));
        content.append(h4);

        let type = document.createElement("p");
        type.setAttribute("class", "type");
        type.appendChild(document.createTextNode("Type: " + value.type));
        content.append(type);

        if(value.type === "Professionnel") {
            let nomEntreprise = document.createElement("p");
            nomEntreprise.setAttribute("class", "nomEntreprise");
            nomEntreprise.appendChild(document.createTextNode("Nom Entreprise: " + value.nomEntreprise));
            content.append(nomEntreprise);
        }
        else {
            let nom = document.createElement("p");
            nom.setAttribute("class", "nom");
            nom.appendChild(document.createTextNode("Nom: " + value.nom));
            content.append(nom);
    
            let prenom = document.createElement("p");
            prenom.setAttribute("class", "prenom");
            prenom.appendChild(document.createTextNode("Prenom: " + value.prenom));
            content.append(prenom);

            let nationalite = document.createElement("p");
            nationalite.setAttribute("class", "nationalite");
            nationalite.appendChild(document.createTextNode("Nationalite: " + value.nationalite));
            content.append(nationalite);
        }
       
        let localisation = document.createElement("p");
        localisation.setAttribute("class", "localisation");
        localisation.appendChild(document.createTextNode("Localisation: " + value.localisation));
        content.append(localisation);

        let numeroTelephone = document.createElement("p");
        numeroTelephone.setAttribute("class", "numeroTelephone");
        numeroTelephone.appendChild(document.createTextNode("Numero Telephone: " + value.numeroTelephone));
        content.append(numeroTelephone);

        let email = document.createElement("p");
        email.setAttribute("class", "email");
        email.appendChild(document.createTextNode("Email: " + value.email));
        content.append(email);

        val.appendChild(content);
    })
    console.log(val)
    target.appendChild(val);
    console.log(document.getElementById('val').innerHTML)
}

export const displayVehicules = () => {
    let c = document.createElement("div").appendChild(document.createTextNode("Coucou"))
    document.getElementById("vehicule").append(c)
}

export const displayVehiculeV3=(target)=>{
    let html = "<article class=\"listeVehicules\">";

    for(let i of Vehicule.listeVehicules) {
        html += `<div class="vehicule">
            <h4 class="vehiculeTitre">${i.marque} ${i.modele}</h4>
            <p class="annee">Annee: ${i.annee}</p>
            <p class="couleur">Couleur: ${i.couleur}</p>
            <p class="kilometrage">Kilometrage: ${i.kilometrage}km</p>
            <p class="prixht">Prix HT: ${i.prixHT}€</p>
            <p class="prixttc">Prix TTC: ${(parseInt(i.prixHT)*0.2 + parseInt(i.prixHT))}€</p>`;
            if(i.disponibilite === true) {
                html+=`<p class="disponibilite">Disponibilité: Disponible</p>`
                console.log(i.disponibilite)
            }
            else {
                html+=`<p class="disponibilite">Disponibilité: Indisponible</p>`
                console.log(i.disponibilite)
            }
            html +=`
            <p class="emplacementvehicule">Emplacement Vehicule: ${i.emplacementVehicule}</p>
            <p class="options">Options: ${i.options}</p>
            <p class="motorisation">Motorisation: ${i.motorisation}</p>
            <p class="nombreportes">Nombre de portes: ${i.nombrePortes}</p>
            <p class="details">Details: ${i.details}</p>
        </div>`;
    }
    html += "</article>";
    console.log(html);
    target.innerHTML = html;
}


export const displayVendeurV3=(target)=>{
    let html = "<article class=\"listeVendeurs\">";

    for(let i of Vendeur.listeVendeurs) {
        html += `<div class="vendeur">
            <h4 class="type">${i.type}</h4>`
            if(i.type === "Professionnel") {
                html+=`<p class="nomEntreprise">Nom Entreprise: ${i.nomEntreprise}</p>`;
            }
            else {
                html+=`<p class="nom">Nom: ${i.nom}</p>
                <p class="prenom">Prenom: ${i.prenom}</p>
                <p class="nationalite">Nationalite: ${i.nationalite}</p>`
            }
            html +=`
            <p class="localisation">Localisation: ${i.localisation}</p>
            <p class="numeroTelephone">Numéro de téléphone: ${i.numeroTelephone}</p>
            <p class="email">Email: ${i.email}</p>
        </div>`;
    }
    html += "</article>";
    console.log(html);
    target.innerHTML = html;
}

export const submitFormVehicule = (event) => {
    event.preventDefault();
    let obj = {}
    for(let i of event.target.elements) {
        obj[i.name] = i.value    
    }
    if(obj.disponibilite === "Disponible") {
        obj.disponibilite = true
    }
    else {
        obj.disponibilite = false
    }
    console.log(obj)
    ajouterVehicule(obj.marque, obj.modele, obj.annee, obj.couleur,
        obj.kilometrage, obj.etat, obj.consommation, obj.options, obj.motorisation,
        obj.nombrePortes, obj.prixHT, obj.emplacementVehicule,
        obj.details, obj.disponibilite);
}