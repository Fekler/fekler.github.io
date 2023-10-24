class LocalizationStrings {
    static LANG = {
        en: "en",
        pt: "pt",
    }
    static NAV_ABOUT = {
        en: "About",
        pt: "Sobre"
    };

    static NAV_PORTFOLIO = {
        en: "Portfolio",
        pt: "Portfólio"
    };

    static NAV_CONTACT = {
        en: "Contact",
        pt: "Contato"
    };
    static GREETING = {
        en: "Hello, I am Felipe Queiroz",
        pt: "Olá, eu sou o Felipe Queiroz"
    };


    static PERFIL = {
        en: "",
        pt: ""
    };


    static SKILLS_TITLE = {
        en: "Skills: ",
        pt: "Habilidades"

    };
    static CONTACT_TITLE = {
        en: "Let's connect ",
        pt: "Vamos nos conectar"

    };
    static CONTACT_P = {
        en: "Below is my social media and contact information:",
        pt: "Abaixo segue minhas redes sociais e informações de contato:"

    };

    static RIGHTER = {
        en: "© 2023 Felipe Queiroz",
        pt: "© 2023 Felipe Queiroz"

    };
}

function changeLanguage(selectedLanguage) {
    document.documentElement.lang = LocalizationStrings.LANG[selectedLanguage];

    var aboutLink = document.getElementById("about-link");

    var portfolioLink = document.getElementById("portfolio-link");

    var contactLink = document.getElementById("contact-link");
    var greetingLink = document.getElementById("greeting-link");

    var perfilLink = document.getElementById("perfil-link");

    var contactTitleLink = document.getElementById("contact-title-link");
    var contactContentLink = document.getElementById("contact-content-link");
    var righterLink = document.getElementById("righter-link");


    aboutLink.textContent = LocalizationStrings.NAV_ABOUT[selectedLanguage];
    portfolioLink.textContent = LocalizationStrings.NAV_PORTFOLIO[selectedLanguage];
    contactLink.textContent = LocalizationStrings.NAV_CONTACT[selectedLanguage];
    greetingLink.textContent = LocalizationStrings.GREETING[selectedLanguage];
    contactTitleLink.textContent = LocalizationStrings.CONTACT_TITLE[selectedLanguage];
    contactContentLink.textContent = LocalizationStrings.CONTACT_P[selectedLanguage];
    perfilLink.textContent = LocalizationStrings.PERFIL[selectedLanguage];
    righterLink.textContent = LocalizationStrings.RIGHTER[selectedLanguage];

}

document.addEventListener("DOMContentLoaded", function () {
    // Coloque seu código JavaScript aqui para garantir que a página tenha sido carregada completamente.
    changeLanguage("pt"); // Defina o idioma padrão aqui, se necessário.
});
