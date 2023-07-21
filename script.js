const pass1 = document.querySelector('#userpass');
const pass2 = document.querySelector('#confirmpass');
pass2.addEventListener('input', () => {
    if (pass1.value !== pass2.value) {
        pass2.setCustomValidity("Password does not match.")
    }
    else {
        pass2.setCustomValidity("")
    }
})