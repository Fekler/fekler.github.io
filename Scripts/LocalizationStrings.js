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
        pt: "Olá, eu sou Felipe Queiroz"
    };

    static PERFIL = {
        en: "I am a .NET Developer with three years of experience, during which I have been involved in the development of .NET Core APIs following the Clean Architecture pattern. I have also adopted Test-Driven Development(TDD) and Clean Code practices to ensure code quality using the language C#. Additionally, I have participated in the creation and maintenance of applications using Xamarin Forms. I also have experience in integrating APIs using the REST protocol.    I am constantly seeking opportunities for growth, dedicating myself to study in order to achieve my professional goals. I have a deep knowledge of the Xamarin and MAUI frameworks and apply the principles of SOLID, Clean Code, and Clean Architecture in my development projects.",

        pt: "Sou um Desenvolvedor .NET com três anos de experiência, durante os quais estive envolvido na elaborção de API's em .NET Core, seguindo o padrão Clean Architecture, e adotei práticas de Test-Driven Development(TDD) e Clean Code para garantir a qualidade do código utilizando a linguagem C#, além disso participei da criação e manutenção de aplicativos utilizando Xamarin Forms.    Também tenho experiência na integração de API's por meio do protocolo REST. Estou constantemente buscando oportunidades de crescimento, dedicando-me ao estudo para alcançar meus objetivos profissionais. Tenho um profundo conhecimento dos frameworks Xamarin e MAUI e aplico os princípios SOLID, Clean Code e Clean Architecture em meus projetos de desenvolvimento. "
    };

    static SKILLS_TITLE = {
        en: "Skills ",
        pt: "Habilidades"

    };

    static SKILLS_CONTENT = {
        en: "My proficiency in the English language is fluent. My experience encompasses the creation and maintenance of applications involving features such as location control (GPS) and facial recognition, the latter integrated with Amazon Web Services (AWS). I am also familiar with development tools like Git and Team Foundation Server (TFS). I have a track record of effective collaboration with multidisciplinary development teams, including designers, software engineers, and project managers. ",

        pt: "Minha proficiência na língua inglesa é fluente.   Minha experiência abrange a criação e manutenção de aplicativos que envolvem funcionalidades como controle de localização (GPS) e validação facial, esta última com integração da Amazon Web Services (AWS). Também estou familiarizado com ferramentas de desenvolvimento, como Git e Team Foundation Server(TFS).  Tenho um histórico de colaboração eficaz com equipes de desenvolvimento multidisciplinares, incluindo designers, engenheiros de software e gerentes de projetos."
    };

    static TEC_TITLE = {
        en: "Technologies",
        pt: "Tecnologias"

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
    var skillTitleLink = document.getElementById("skill-title-link");
    var skillContentLink = document.getElementById("skill-content-link");
    var tecTitleLink = document.getElementById("tec-title-link");


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
    skillTitleLink.textContent = LocalizationStrings.SKILLS_TITLE[selectedLanguage];
    skillContentLink.textContent = LocalizationStrings.SKILLS_CONTENT[selectedLanguage];
    tecTitleLink.textContent = LocalizationStrings.TEC_TITLE[selectedLanguage];

    righterLink.textContent = LocalizationStrings.RIGHTER[selectedLanguage];

}

document.addEventListener("DOMContentLoaded", function () {
    // Coloque seu código JavaScript aqui para garantir que a página tenha sido carregada completamente.
    changeLanguage("pt"); // Defina o idioma padrão aqui, se necessário.
});
