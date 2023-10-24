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
        en:"Skills: ",
        pt:"Habilidades"

    };
    static RIGHTER = {
        en:"© 2023 Felipe Queiroz",
        pt:"© 2023 Felipe Queiroz"

    };
}

function changeLanguage(selectedLanguage) {
    var aboutLink = document.getElementById("about-link");
    var portfolioLink = document.getElementById("portfolio-link");
    var contactLink = document.getElementById("contact-link");

    var greetingLink = document.getElementById("greeting-link");
    var perfilLink = document.getElementById("perfil-link");
    
    var righterLink = document.getElementById("righter-link");


    document.documentElement.lang = LocalizationStrings.LANG[selectedLanguage];

    aboutLink.textContent = LocalizationStrings.NAV_ABOUT[selectedLanguage];
    portfolioLink.textContent = LocalizationStrings.NAV_PORTFOLIO[selectedLanguage];
    contactLink.textContent = LocalizationStrings.NAV_CONTACT[selectedLanguage];

    greetingLink.textContent = LocalizationStrings.GREETING[selectedLanguage];
    perfilLink.textContent = LocalizationStrings.PERFIL[selectedLanguage];



    righterLink.textContent = LocalizationStrings.RIGHTER[selectedLanguage];

}
document.addEventListener("DOMContentLoaded", function () {
    // Coloque seu código JavaScript aqui para garantir que a página tenha sido carregada completamente.
    changeLanguage("pt"); // Defina o idioma padrão aqui, se necessário.
});
