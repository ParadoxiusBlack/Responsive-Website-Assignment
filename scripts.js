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

function updateThemeToggleButtonPosition() {
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle');
    const nav = document.querySelector('nav');
    const aside = document.querySelector('aside');

    if (window.innerWidth < 769) {
        if (themeToggleButton.parentNode !== nav) {
            nav.appendChild(themeToggleButton);
        }
    } else {
        if (themeToggleButton.parentNode !== aside) {
            aside.appendChild(themeToggleButton);
        }
    }
}

function toggleTheme() {
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle');

    // Toggle the theme class
    body.classList.toggle('light');

    // Change button text and appearance
    if (body.classList.contains('light')) {
        themeToggleButton.textContent = 'Dark Mode'; // Change text to indicate dark mode
        themeToggleButton.style.backgroundColor = 'black'; // Dark background
        themeToggleButton.style.color = 'white'; // White text
    } else {
        themeToggleButton.textContent = 'Light Mode'; // Change text to indicate light mode
        themeToggleButton.style.backgroundColor = 'white'; // Light background
        themeToggleButton.style.color = 'black'; // Black text
    }
}

// Initial setup to set button appearance based on default theme
window.onload = function() {
    updateThemeToggleButtonPosition();
    
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle');
    
    if (body.classList.contains('light')) {
        themeToggleButton.textContent = 'Dark Mode';
        themeToggleButton.style.backgroundColor = 'black';
        themeToggleButton.style.color = 'white';
    } else {
        themeToggleButton.textContent = 'Light Mode';
        themeToggleButton.style.backgroundColor = 'white';
        themeToggleButton.style.color = 'black';
    }
};

// Move the button on window resize
window.onresize = updateThemeToggleButtonPosition;
