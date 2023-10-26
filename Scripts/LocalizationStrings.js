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
        en: "About me",
        pt: "Um pouco sobre mim"

    };

    static SKILLS_CONTENT = {
        en: "I have a Bachelor's degree in Information Technology Management, where I graduated with honors as the top performer. My proficiency in the English language is fluent. My experience encompasses the creation and maintenance of applications involving features such as location control (GPS) and facial recognition, the latter integrated with Amazon Web Services (AWS). I am also familiar with development tools like Git and Team Foundation Server (TFS). I have a track record of effective collaboration with multidisciplinary development teams, including designers, software engineers, and project managers.",

        pt: "Tenho Graduação Superior tecnologica em Gestão da Tecnologia da informação, onde recebi honras como melhor concluinte, Minha proficiência na língua inglesa é fluente.   Minha experiência abrange a criação e manutenção de aplicativos que envolvem funcionalidades como controle de localização (GPS) e validação facial, esta última com integração da Amazon Web Services (AWS). Também estou familiarizado com ferramentas de desenvolvimento, como Git e Team Foundation Server(TFS).  Tenho um histórico de colaboração eficaz com equipes de desenvolvimento multidisciplinares, incluindo designers, engenheiros de software e gerentes de projetos."
    };

    static TEC_TITLE = {
        en: "Technologies",
        pt: "Tecnologias"

    };

    static PROJECT_TITLE = {
        en: "Project: ",
        pt: "Projeto: "
    };
    static PROJECT_DESCRIPTION = {
        en: "Description: ",
        pt: "Descrição: "
    };
    static PROJECT_STACKS = {
        en: "Technologies used: ",
        pt: "Tecnologias usadas: "
    };
    static PROJECT_SOURCE_CODE = {
        en: "Source Code: ",
        pt: "Código Fonte:  "
    };

    static PROJECT_TITLE_CONTENT1 = {
        en: "AppGallery ",
        pt: "AppGallery "
    };
    static PROJECT_DESCRIPTION_CONTENT1 = {
        en: "Personal project aimed at testing and gaining proficiency in all the components and elements of Xamarin Forms. This Android-compiled application is available on the store and showcases the implementation of key components.",
        pt: "Iniciativa pessoal para testar e aprofundar o conhecimento em todos os componentes e elementos do Xamarin Forms. Este aplicativo, compilado para Android, está disponível na loja e apresenta a implementação de componentes-chave"
    };
    static PROJECT_STACKS_CONTENT1 = {
        en: "Programming Language: C#, Database: SQLite, Framework: Xamarin Forms",
        pt: "Linguagem de programação: C#, Banco de dados: SQLite, Framework: Xamarin Forms"
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
    var skillTitleLink = document.getElementById("skill-title-link");
    var skillContentLink = document.getElementById("skill-content-link");
    var tecTitleLink = document.getElementById("tec-title-link");

    var projectTitleLink = document.getElementById("project-title");
    var projectDescriptionLink = document.getElementById("project-description");
    var projectStackLink = document.getElementById("project-stacks");
    var projectSourceCodeLink = document.getElementById("project-sourceCode");

    var projectTitleContentLink = document.getElementById("project-title-content");
    var projectDescriptionContentLink = document.getElementById("project-description-content");
    var projectStacksContentLink = document.getElementById("project-stacks-content");


    var contactTitleLink = document.getElementById("contact-title-link");
    var contactContentLink = document.getElementById("contact-content-link");
    var righterLink = document.getElementById("righter-link");


    document.documentElement.lang = LocalizationStrings.LANG[selectedLanguage];

    aboutLink.textContent = LocalizationStrings.NAV_ABOUT[selectedLanguage];

    portfolioLink.textContent = LocalizationStrings.NAV_PORTFOLIO[selectedLanguage];

    contactLink.textContent = LocalizationStrings.NAV_CONTACT[selectedLanguage];

    greetingLink.textContent = LocalizationStrings.GREETING[selectedLanguage];

    perfilLink.textContent = LocalizationStrings.PERFIL[selectedLanguage];

    skillTitleLink.textContent = LocalizationStrings.SKILLS_TITLE[selectedLanguage];
    skillContentLink.textContent = LocalizationStrings.SKILLS_CONTENT[selectedLanguage];
    tecTitleLink.textContent = LocalizationStrings.TEC_TITLE[selectedLanguage];

    projectTitleLink.textContent = LocalizationStrings.PROJECT_TITLE[selectedLanguage];
    projectDescriptionLink.textContent = LocalizationStrings.PROJECT_DESCRIPTION[selectedLanguage];
    projectStackLink.textContent = LocalizationStrings.PROJECT_STACKS[selectedLanguage];
    projectSourceCodeLink.textContent = LocalizationStrings.PROJECT_SOURCE_CODE[selectedLanguage];

    projectTitleContentLink.textContent = LocalizationStrings.PROJECT_TITLE_CONTENT1[selectedLanguage];
    projectDescriptionContentLink.textContent = LocalizationStrings.PROJECT_DESCRIPTION_CONTENT1[selectedLanguage];
    projectStacksContentLink.textContent = LocalizationStrings.PROJECT_STACKS_CONTENT1[selectedLanguage];

    righterLink.textContent = LocalizationStrings.RIGHTER[selectedLanguage];

}

document.addEventListener("DOMContentLoaded", function () {
    // Coloque seu código JavaScript aqui para garantir que a página tenha sido carregada completamente.
    changeLanguage("pt"); // Defina o idioma padrão aqui, se necessário.
});
