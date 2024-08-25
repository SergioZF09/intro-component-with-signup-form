//Inputs
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

//Error messages
const firstNameError = document.querySelector("#errorFirstName");
const lastNameError = document.querySelector("#errorLastName");
const emailError = document.querySelector("#errorEmail");
const passwordError = document.querySelector("#errorPassword");

//Button
//const btnClaim = document.querySelector("#btnClaim");

function SendInfo() {
    validateInfo(firstName.value, firstName, firstNameError, "First Name cannot be empty");
    validateInfo(lastName.value, lastName, lastNameError, "Last Name cannot be empty");
    validateEmail(email.value, email, emailError);
    validateInfo(password.value, password, passwordError, "Password cannot be empty");
}

function validateInfo(infoInputs, input, errorContainer, text) {
    if (infoInputs.length == 0) {
        showError(input, errorContainer, text);
    }else{
        hideError(input, errorContainer);
    }

    // let validateFirstName = ( infoInputs.length == 0 ? showError() : hideError() );
}

function validateEmail(infoInputs, input, errorContainer) {
    let characters = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
    let validate = true;
    if (!infoInputs.match(characters)) {
        showError(input, errorContainer, "Looks like this is not an email");
        return validate = false;
    }else{
        hideError(input, errorContainer);
        return validate = true;
    }
}

function showError(input, errorContainer, textError) {
    input.style.border = "1px solid red";
    errorContainer.innerHTML = `
    <img class="icon-error" src="./images/icon-error.svg" alt="icon-error">
    <p class="error">${textError}</p>
    `;
}

function hideError(input, errorContainer) {
    input.style.border = "1px solid hsl(246, 25%, 77%)";
    errorContainer.innerHTML = '';
}