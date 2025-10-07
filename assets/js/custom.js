// assets/js/custom.js
document.addEventListener("DOMContentLoaded", function() {
    // Initialize lightGallery for robot profiles
    const robotGalleries = document.querySelectorAll('.robot-gallery');
    if (robotGalleries.length > 0) {
        robotGalleries.forEach(gallery => {
            lightGallery(gallery, {
                selector: 'a'
            });
        });
    }
});
