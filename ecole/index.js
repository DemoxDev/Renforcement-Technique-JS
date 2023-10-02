import { Eleve } from "./eleves.js"

let a = new Eleve("Bissour", "Melvin", "15/10/1992", "1 avenue brocolie", "75020", "Paris", "Français")
let b = new Eleve("Ouaki", "Valentin", "15/09/1992", "1 avenue brocolie", "75020", "Paris", "Français")

Eleve.liste.push(a);
Eleve.liste.push(b);
