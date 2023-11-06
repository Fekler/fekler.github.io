document.addEventListener("DOMContentLoaded", function () {
    const elementsWithID1 = document.querySelectorAll('.smooth');
    const elementsWithID2 = document.querySelectorAll('.name');
    const scrollLinks = Array.from(elementsWithID1).concat(Array.from(elementsWithID2));

    scrollLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

