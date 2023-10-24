var images = document.querySelectorAll('.divSkills span');
var prevButton = document.getElementById('prev-button');
var nextButton = document.getElementById('next-button');
var currentIndex = 0;

function showImages() {
    var windowWidth = window.innerWidth;
    var numImagesToShow = 7;

    if (windowWidth < 768) {
        numImagesToShow = 2;
    } else if (windowWidth < 1024) {
        numImagesToShow = 5;
    }

    images.forEach(function (image, index) {
        if (index >= currentIndex && index < currentIndex + numImagesToShow) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

    prevButton.style.display = currentIndex > 0 ? 'block' : 'none';
    nextButton.style.display = currentIndex + numImagesToShow < images.length ? 'block' : 'none';
}

prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex -= 1;
        showImages();
    }
});

nextButton.addEventListener('click', function () {
    var windowWidth = window.innerWidth;
    var numImagesToShow = 7;

    if (windowWidth < 768) {
        numImagesToShow = 2;
    } else if (windowWidth < 1024) {
        numImagesToShow = 5;
    }

    if (currentIndex + numImagesToShow < images.length) {
        currentIndex += 1;
        showImages();
    }
});

showImages();
window.addEventListener('resize', showImages);