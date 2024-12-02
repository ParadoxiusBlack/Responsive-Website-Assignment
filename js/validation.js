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
