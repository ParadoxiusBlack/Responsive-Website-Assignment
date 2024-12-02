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

/* Edits include: Creating a main.js file, spliting functions in a previous scripts.js into several seperate .js files, adding initValidation function, and creating the validation.js file */

document.addEventListener("DOMContentLoaded", function(event) {
    initValidation("#myform");
    initModal();
    initThemeToggle();
});

function initValidation(formId) {
    const form = document.querySelector(formId);
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            form.style.display = 'none';
            document.getElementById('thankYouMessage').style.display = 'block';
        }
    });

    // Add onChange event listeners for individual fields
}
