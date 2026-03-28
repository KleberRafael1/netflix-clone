import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';


// Recupera dados do perfil
const userName = localStorage.getItem("profileName");
const userImg = localStorage.getItem("profileImg");

console.log("Nome:", userName);
console.log("Imagem:", userImg);

// Elementos do header
const nameElement = document.getElementById("user-name");
const imgElement = document.getElementById("user-img");

// Atualiza na tela
if (userName && userImg) {
    nameElement.textContent = userName;
    imgElement.src = userImg.replace("./", "../");
}




document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
