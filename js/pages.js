/* 
Project:  Project 5-Personal Web Site-Visitor Form Validation-Refactor JS
Name: Connor Preece
Submitted: 12/2/2024
 
I declare that the following source code was written by me, or provided
by the instructor for this project. I understand that copying source
code from any other source, providing source code to another student, 
or leaving my code on a public web site constitutes cheating.
I acknowledge that If I am found in violation of this policy this may result
in a zero grade, a permanent record on file and possibly immediate failure of the class.
*/


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

function updateThemeToggleButtonPosition() {
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

    body.classList.toggle('light');

    if (body.classList.contains('light')) {
        themeToggleButton.textContent = 'Dark Mode';
        themeToggleButton.style.backgroundColor = 'black';
        themeToggleButton.style.color = 'white';
    } else {
        themeToggleButton.textContent = 'Light Mode';
        themeToggleButton.style.backgroundColor = 'white';
        themeToggleButton.style.color = 'black';
    }
}

window.onload = function() {
    updateThemeToggleButtonPosition();
    const themeToggleButton = document.getElementById('theme-toggle');
    if (document.body.classList.contains('light')) {
        themeToggleButton.textContent = 'Dark Mode';
        themeToggleButton.style.backgroundColor = 'black';
        themeToggleButton.style.color = 'white';
    } else {
        themeToggleButton.textContent = 'Light Mode';
        themeToggleButton.style.backgroundColor = 'white';
        themeToggleButton.style.color = 'black';
    }
};

window.onresize = updateThemeToggleButtonPosition;
