function adjustImageHeight() {
    // Verifique se a largura da tela é maior que 767px
    var perfilContainer = document.getElementById("greetings-text-content");
    var imageContainer = document.getElementById("img-perfil");
    if (window.innerWidth > 767) {


        // Ajusta a altura da imagem para a altura do perfilContainer
        imageContainer.style.height = perfilContainer.clientHeight + "px";

        // Ajusta a largura da imagem para a largura do perfilContainer (opcional)
        // imageContainer.style.width = perfilContainer.clientWidth + "px";
    }
    else{
        imageContainer.style.maxWidth = "80%";
        imageContainer.style.height = "auto";
    } 
    
}

// Chame a função quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", adjustImageHeight);

// Adicione um ouvinte de evento de redimensionamento
window.addEventListener("resize", adjustImageHeight);