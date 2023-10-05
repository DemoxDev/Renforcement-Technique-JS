import { Jeu } from "../classes/jeu.js";

export const displayJeu = () => {
    let html = `<div class="relative w-[600px] mx-auto">`
    for(let i of Jeu.listeJeux){
        for(let j of i.photos) {
            html += `
            <div class="slide relative">
                <img src="${j}" alt="" style="width: 500px; height: 250px;" class="transition-all ease-in-out duration-1000 transform translate-x-0" />
            </div>`
        }
        html += `
        <!-- Le bouton < -->
        <a class="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
            onclick="moveSlide(-1)">❮</a>

        <!-- Le bouton > -->
        <a class="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
            onclick="moveSlide(1)">❯</a>
        </div>
        <br>
        <div class="flex justify-center items-center space-x-5">
            <div class="dot w-4 h-4 rounded-full cursor-pointer" onclick="currentSlide(1)"></div>
            <div class="dot w-4 h-4 rounded-full cursor-pointer" onclick="currentSlide(2)"></div>
            <div class="dot w-4 h-4 rounded-full cursor-pointer" onclick="currentSlide(3)"></div>
        </div>
        <article class="jeu">
            <div class="jeuTitre">
            <h4 class="jeuTitrePrix">${i.nom} ${i.developpeur} ${i.prix}€</h4>
            <h6>${i.editeur}</h6>
            <h5>${i.disponibilite ? "Disponible" : "Indisponible"}</h5>
            </div>
            <div class="jeuInfos">
            <p class="annee">Annee: ${i.annee}</p>
            <p class="genre">Genre: ${i.genre}</p>
            </div>
        </article>
        `
    }
    document.getElementById("showListeJeux").innerHTML=html;
    console.log(html)
}

document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 1;
    console.log("slideindex: ", slideIndex);

    function showSlide(n) {
        let i;
        const slides = document.getElementsByClassName("slide");
        console.log("slides: ", slides);
        const dots = document.getElementsByClassName('dot');
        console.log("dots: ", dots);

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (i = 0; i < slides.length; i++) {
            slides[i].classList.add('hidden');
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove('bg-yellow-500');
            dots[i].classList.add('bg-green-600');
        }

        slides[slideIndex - 1].classList.remove('hidden');

        dots[slideIndex - 1].classList.remove('bg-green-600');
        dots[slideIndex - 1].classList.add('bg-yellow-500');
    }

    // Define the moveSlide function in the global scope
    window.moveSlide = (moveStep) => {
        showSlide(slideIndex += moveStep);
    };

    window.currentSlide = (n) => {
        showSlide(slideIndex = n);
    };

    showSlide(slideIndex);
})

export const ToggleDivFormJeux = () => {
    var T = document.getElementById("ajouterJeuDiv");
    if(T.style.display === "none"){
        T.style.display = "block";
    }
    else{
        T.style.display = "none";
    }
}