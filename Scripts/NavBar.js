function NavBarClick() {
    var x = document.getElementsByClassName("navbar")[0];
    var links = document.querySelectorAll(".navbar a:not(.icon)");

    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }

    // Feche o menu móvel se um link for clicado
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
            x.className = "navbar";
        });
    }
}