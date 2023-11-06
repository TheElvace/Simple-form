const form = document.getElementById("form");

const button = document.getElementById("button");

const fName = document.getElementById("fName");

const lName = document.getElementById("lName");

const email = document.getElementById("email");

const password = document.getElementById("password");

const small = document.querySelector("small");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    formFunction ();
})

function formFunction () {
    console.log("submitted");

    let fNameValue = fName.value.trim();
    let lNameValue = lName.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    if (fNameValue === '') {
        setErrorFor(fName, 'field is empty');
    } else {
        setSuccessFor(fName);
    } 

    if (lNameValue === '') {
        setErrorFor(lName, 'field should not be empty');
    } else {
        setSuccessFor(lName);
    }

    if (emailValue === '') {
        setErrorFor(email, 'not possible');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, "can't work");
    } else if (passwordValue.length < 6) {
        small.classList.remove('small')
        
        
        setErrorFor(password, "must be at least 6 characters");
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor (input, errorMessage) {
    input.classList.add('error');
    input.placeholder = errorMessage
    small.innerText = errorMessage
}

function setSuccessFor (input) {
    input.classList.add('success');
}