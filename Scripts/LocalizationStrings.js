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
}

function changeLanguage(selectedLanguage) {
    var aboutLink = document.getElementById("about-link");
    var portfolioLink = document.getElementById("portfolio-link");
    var contactLink = document.getElementById("contact-link");

    aboutLink.textContent = LocalizationStrings.NAV_ABOUT[selectedLanguage];
    portfolioLink.textContent = LocalizationStrings.NAV_PORTFOLIO[selectedLanguage];
    contactLink.textContent = LocalizationStrings.NAV_CONTACT[selectedLanguage];
    document.documentElement.lang = LocalizationStrings.LANG[selectedLanguage];

    greeting.textContent = LocalizationStrings.GREETING[selectedLanguage];

}
document.addEventListener("DOMContentLoaded", function () {
    // Coloque seu código JavaScript aqui para garantir que a página tenha sido carregada completamente.
    changeLanguage("pt"); // Defina o idioma padrão aqui, se necessário.
});
