const tab=["https://m.media-amazon.com/images/I/81vt8Zuy8AL._AC_UF1000,1000_QL80_.jpg", "https://www.cnet.com/a/img/resize/43bf7152f39f90a03df23c97a8a7ebb9a09ea520/hub/2022/02/23/f12a8db7-d99b-4b8d-9b09-d84f12661cf7/elden-ring-plakat.jpg?auto=webp&fit=bounds&height=1200&precrop=571,571,x357,y149&width=1200", "https://cdn.thewirecutter.com/wp-content/media/2022/03/elden-ring-2048px-0003.jpg?auto=webp&quality=75&width=1024"]
var index = 0;

document.getElementById("image").src = tab[0];
function moveSlide(number){
    index +=number;
    if(index < 0){
        index = tab.length -1;
    } else if (index >= tab.length){
        index = 0;
    }
    document.getElementById("image").src = tab[index];
}
// quand on clique gauche tab[i-1], droite tab[i+1]

document.querySelector('.absolute-button').addEventListener('click', function() { moveSlide(-1); });
document.querySelector('.absolute.right-0').addEventListener('click', function() { moveSlide(1); });
