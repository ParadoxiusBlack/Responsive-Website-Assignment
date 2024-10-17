document.querySelector('header').addEventListener('click', function() {
    this.classList.add('jump');
    // Remove the class after the animation ends to allow re-triggering
    setTimeout(() => {
        this.classList.remove('jump');
    }, 500); // Match the duration of the animation
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}
