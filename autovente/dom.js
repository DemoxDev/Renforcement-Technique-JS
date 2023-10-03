import { displayListeVendeurs, displayListeVehicules, displayVehiculeV3, displayVendeurV3 } from "./controller/vehiculeController.js"
import { displayVehiculeV4 } from "./views/vehiculeView.js"
import { displayVendeur } from "./views/vendeurView.js"


document.getElementById("showListeVehicules").addEventListener("click", () => {
    console.log(event)
    // document.getElementById("listeVehicules").style = "background-color: red; color: black";
    displayVehiculeV4(showListeVehicules);
})

document.getElementById("showListeVendeurs").addEventListener("click", () => {
    console.log(event)
    // document.getElementById("listeVendeurs").style = "background-color: red; color: black";
    displayVendeur(showListeVendeurs);
})