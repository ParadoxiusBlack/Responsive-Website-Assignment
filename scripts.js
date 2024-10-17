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
        if (section.id === sectionId) {
            section.style.display = 'block';
            section.setAttribute('aria-hidden', 'false');
        } else {
            section.style.display = 'none';
            section.setAttribute('aria-hidden', 'true');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalVideo = document.getElementById('modal-video');
    const modalVideoSource = document.getElementById('modal-video-source');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.clickable').forEach(item => {
        item.addEventListener('click', function() {
            if (this.tagName === 'IMG') {
                modalImg.src = this.src;
                modalImg.style.display = 'block';
                modalVideo.style.display = 'none';
            } else if (this.tagName === 'VIDEO') {
                modalVideoSource.src = this.querySelector('source').src;
                modalVideo.load();
                modalVideo.style.display = 'block';
                modalImg.style.display = 'none';
            }
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
