import { displayListeVendeurs, displayListeVehicules } from "./controller/vehiculeController.js"

document.getElementById("listeVehicules").addEventListener("click", () => {
    console.log(event)
    // document.getElementById("listeVehicules").style = "background-color: red; color: black";
    displayListeVehicules(listeVehicules);
})

document.getElementById("listeVendeurs").addEventListener("click", () => {
    console.log(event)
    // document.getElementById("listeVendeurs").style = "background-color: red; color: black";
    displayListeVendeurs(listeVendeurs);
})