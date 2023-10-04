import { Vehicule } from "../classes/vehicule.js";
import { Vendeur } from "../classes/vendeur.js";

export const ajouterVendeurPro = (societe, localisation, numeroTelephone, email) => {
    Vendeur.listeVendeurs.push(new Vendeur("Professionnel", societe, null, null, localisation, null, numeroTelephone, email, null, "Test"));
}

export const ajouterVendeurPar = (nom, prenom, localisation, nationalite, numeroTelephone, email) => {
    Vendeur.listeVendeurs.push(new Vendeur("Particulier", null, nom, prenom, localisation, nationalite, numeroTelephone, email, null, "Test"));
}

export const submitFormVendeur = (event) => {
    event.preventDefault();
    console.log(document.forms.ajouterVendeurFormulaire.type.value);
    if(document.forms.ajouterVendeurFormulaire.type.value === "professionnel") {
        ajouterVendeurPro(document.forms.ajouterVendeurFormulaire.societe.value,
            document.forms.ajouterVendeurFormulaire.localisation.value,
            document.forms.ajouterVendeurFormulaire.numeroTelephone.value,
            document.forms.ajouterVendeurFormulaire.email.value);
        console.log("x")
    }
    else if(document.forms.ajouterVendeurFormulaire.type.value === "particulier") {
        ajouterVendeurPar(document.forms.ajouterVendeurFormulaire.nom.value,
            document.forms.ajouterVendeurFormulaire.prenom.value,
            document.forms.ajouterVendeurFormulaire.localisation.value,
            document.forms.ajouterVendeurFormulaire.nationalite.value,
            document.forms.ajouterVendeurFormulaire.numeroTelephone.value,
            document.forms.ajouterVendeurFormulaire.email.value);
        console.log("x")
    }
    console.log(Vendeur.listeVendeurs)
}

export const checkFormAjouterVendeur = (ajouterVendeur) => {
    let checked = true
    if(ajouterVendeur.type !== null || ajouterVendeur.type !== undefined) {
        console.log("OK")
        checked = false
    }
    if(ajouterVendeur.nom !== null && ajouterVendeur.nom !== undefined  && ajouterVendeur.type === "Particulier") {
        console.log("OK NOM")
        checked = false
    }
    if(ajouterVendeur.prenom !== null && ajouterVendeur.prenom !== undefined  && ajouterVendeur.type === "Particulier") {
        console.log("OK PRENOM")
        checked = false
    }
    if(ajouterVendeur.societe !== null && ajouterVendeur.societe !== undefined  && ajouterVendeur.type === "Professionnel") {
        console.log("OK SOCIETE")
        checked = false
    }
    if(ajouterVendeur.localisation !== null && ajouterVendeur.localisation !== undefined ) {
        console.log("OK LOCALISATION")
        checked = false
    }
    if(ajouterVendeur.numeroTelephone !== null && ajouterVendeur.numeroTelephone !== undefined ) {
        console.log("OK NUMERO")
        checked = false
    }
    if(ajouterVendeur.email !== null && ajouterVendeur.email !== undefined ) {
        console.log("OK EMAIL")
        checked = false
    }
    return checked
}

// export const lireDetailVendeur = async (idDetailVendeur) => {

//     return await Vendeur.listeVendeurs.find((vendeur) => {
//         return vendeur.idVendeur === idDetailVendeur
//     })
// }

