var imagesContact = document.querySelectorAll('.divContactIcon span');
var prevContactButton = document.getElementById('prev-contact-button');
var nextContactButton = document.getElementById('next-contact-button');
var currentContactIndex = 0;

function showImagesContact() {
    var windowWidth = window.innerWidth;
    var numImagesToShow = 7;

    if (windowWidth < 768) {
        numImagesToShow = 2;
    } else if (windowWidth < 1024) {
        numImagesToShow = 5;
    }

    imagesContact.forEach(function (image, index) {
        if (index >= currentContactIndex && index < currentContactIndex + numImagesToShow) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

    prevContactButton.style.display = currentContactIndex > 0 ? 'block' : 'none';
    nextContactButton.style.display = currentContactIndex + numImagesToShow < imagesContact.length ? 'block' : 'none';
}

prevContactButton.addEventListener('click', function () {
    if (currentContactIndex > 0) {
        currentContactIndex -= 1;
        showImagesContact();
    }
});

nextContactButton.addEventListener('click', function () {
    var windowWidth = window.innerWidth;
    var numImagesToShow = 7;

    if (windowWidth < 768) {
        numImagesToShow = 2;
    } else if (windowWidth < 1024) {
        numImagesToShow = 5;
    }

    if (currentContactIndex + numImagesToShow < imagesContact.length) {
        currentContactIndex += 1;
        showImagesContact();
    }
});

showImagesContact();
window.addEventListener('resize', showImagesContact);

