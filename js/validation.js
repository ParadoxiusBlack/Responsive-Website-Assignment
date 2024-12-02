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

function checkRequired(fieldId, RequiredMessage) {
    const field = document.getElementById(fieldId);
    if (!field.value.trim()) {
        setElementValidity(fieldId, false, RequiredMessage);
        return false;
    }
    setElementValidity(fieldId, true, '');
    return true;
}

function checkFormat(fieldId, BadFormatMessage, regex) {
    const field = document.getElementById(fieldId);
    if (!regex.test(field.value.trim())) {
        setElementValidity(fieldId, false, BadFormatMessage);
        return false;
    }
    setElementValidity(fieldId, true, '');
    return true;
}

function validateState(fieldId, InvalidMessage) {
    const field = document.getElementById(fieldId);
    const stateAbbreviations = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
    if (!stateAbbreviations.includes(field.value.trim().toUpperCase())) {
        setElementValidity(fieldId, false, InvalidMessage);
        return false;
    }
    setElementValidity(fieldId, true, '');
    return true;
}

function setElementValidity(id, valid, message) {
    const field = document.getElementById(id);
    const errorDiv = field.nextElementSibling;
    if (valid) {
        field.classList.remove('was-validated');
        field.setCustomValidity('');
        errorDiv.textContent = '';
    } else {
        field.classList.add('was-validated');
        field.setCustomValidity(message);
        errorDiv.textContent = message;
    }
}

function validateForm() {
    let valid = true;
    valid &= checkRequired('firstName', 'First name is required');
    valid &= checkRequired('lastName', 'Last name is required');
    valid &= checkRequired('address', 'Address is required');
    valid &= checkRequired('city', 'City is required');
    valid &= validateState('state', 'Invalid state');
    valid &= checkFormat('zip', 'Invalid zip code', /^[0-9]{5}(?:-[0-9]{4})?$/);
    valid &= checkFormat('cellPhone', 'Invalid phone number', /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/);
    valid &= checkFormat('email', 'Invalid email address', /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    valid &= checkRequired('source', 'Please select at least one source');

    return valid;
}

