// script.js
// Add interactivity - toggle class on hover
const beachItems = document.querySelectorAll('li');

beachItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('hovered');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('hovered');
    });
});


