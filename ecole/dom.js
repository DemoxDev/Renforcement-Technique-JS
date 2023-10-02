import { displayEleve } from "./eleveController.js"

document.getElementById("listeEcole").addEventListener("click", () => {
    console.log(event)
    document.getElementById("listeEleve").style = "background-color: red; color: black";
    displayEleve();
})