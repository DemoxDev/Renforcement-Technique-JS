import { Vehicule } from "./classes/vehicule.js";
import { Vendeur } from "./classes/vendeur.js";
import { ajouterVehicule, ajouterVendeurVehiculeV2, getVehiculeNonVendu } from "./controller/vehiculeController.js";
import { ajouterVendeurPro, ajouterVendeurPar } from "./controller/vendeurController.js";


ajouterVehicule("BMW","M3","2004","Gris","150000", "Occasion", "2L/100km",
["Cabriolet","CSL","Sports"],"Inline 6", "2", "30000", "13 Pl. Paris 75013 Paris", null, null, "Véhicule de collection", true);

ajouterVehicule("Volkswagen","Golf","2006","Rouge","125000", "Occasion", "3L/100km",
["GTI","TSI","Clubsport"],"V6", "4", "20000", "9 Rue de la Ferté 75017 Paris", null, null, "Véhicule de famille / sport", false);

console.log(Vehicule.listeVehicules);

console.log("-----------------------------------");

console.log(getVehiculeNonVendu());

console.log("-----------------------------------");

ajouterVendeurPro("Autospère","Île-de-France","0102131451","contact@auto-sphere.com");
ajouterVendeurPar("Jean","Dupont","Paris","Francaise","0617115134","jeandupont@gmail.com","Test");

console.log(Vendeur.listeVendeurs);

console.log("-----------------------------------");

ajouterVendeurVehiculeV2(1, 2)