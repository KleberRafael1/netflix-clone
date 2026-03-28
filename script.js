const button = document.getElementById("toggle-theme");
const body = document.body;

// Carrega tema salvo
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    body.classList.add("light-mode");
}

// Alterna tema
button.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});

const perfis = document.querySelectorAll("li");

perfis.forEach(perfil => {
    perfil.addEventListener("click", () => {

        const nome = perfil.getAttribute("data-name");
        const imagem = perfil.getAttribute("data-img");

        localStorage.setItem("profileName", nome);
        localStorage.setItem("profileImg", imagem);

        window.location.href = "./catalogo/catalogo.html";
    });
});