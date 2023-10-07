import { Jeu } from "../classes/jeu.js";

export const displayJeu = () => {
    let html = `<div class="relative w-[800px] mx-auto">` // Adjusted width
    for(let i of Jeu.listeJeux){
        html += `<div class="slider-${i.idJeu}">`
        for(let j of i.photos) {
            html += `
            <div class="slide relative">
                <img src="${j}" alt="" style="width: 200px; height: 250px;" class="transition-all ease-in-out duration-1000 transform translate-x-0" />
                <!-- Le bouton < -->
                <a class="absolute-button p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
                    onclick="moveSlide(-1)">❮</a>
        
                <!-- Le bouton > -->
                <a class="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
                    onclick="moveSlide(1)">❯</a>
                </div>`
        }
        html += `
        <!-- Placeholder -->
        <div style="height: 250px;"></div>
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
        </div>
        `
    }
    document.getElementById("showListeJeux").innerHTML=html;
}

document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 1;

    function showSlide(n) {
        let i;
        const slides = document.getElementsByClassName("slide");
        const dots = document.getElementsByClassName('dot');

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (i = 0; i < slides.length; i++) {
            slides[i].classList.add('hidden');
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove('bg-gray-600');
            dots[i].classList.add('bg-gray-300');
        }

        slides[slideIndex - 1].classList.remove('hidden');

        dots[slideIndex - 1].classList.remove('bg-gray-300');
        dots[slideIndex - 1].classList.add('bg-gray-600');
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