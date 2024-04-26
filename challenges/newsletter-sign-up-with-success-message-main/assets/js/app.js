const signUpSection = document.getElementById("signUp");
const successSection = document.getElementById("success");
const emailInput = document.getElementById("email");
const form = document.getElementById("form");
const dismiss = document.getElementById("dismissButton")

let validateEmail = (email) => {
    const check = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return check.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(event){
    event.preventDefault();

    if (validateEmail(emailInput.value)) {
        console.log('Valid Email!');
        successSection.classList.remove('hidden');
        signUpSection.classList.add('hidden');
    } else {
        console.log('Invalid Email');
        alert('Por favor introduce un email válido');
    }
});

dismiss.addEventListener('click', function(){
    successSection.classList.add('hidden');
    signUpSection.classList.remove('hidden');
});
