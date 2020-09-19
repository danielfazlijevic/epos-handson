const form = document.querySelector('form');
const nameField = document.querySelector('#name');
const emailField = document.querySelector('#email');
const workshopField = document.querySelector('#workshop');
const navbar = document.querySelector('nav');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(workshopField.value);
    if (nameField.value.trim().length === 0)
        return alert('Ime ne sme biti prazno!');
    if (emailField.value.trim().length === 0)
        return alert('Email ne sme biti prazan!');
    if (workshopField.value == '0')
        return alert('Morate odabrati radionicu!');


    localStorage.setItem("name", nameField.value.trim());
    localStorage.setItem("email", emailField.value.trim());
    nameField.value = '';
    emailField.value = '';
    workshopField.value = '0';
    alert('Uspešno ste se prijavili!');
});

function getFieldsFromLocalStorage() {
    console.log('Retrieving fields from local storage');
    if (localStorage.getItem("name")) {
        nameField.value = localStorage.getItem("name");
    }
    if (localStorage.getItem("email"))
        emailField.value = localStorage.getItem("email");
}


getFieldsFromLocalStorage();


window.addEventListener('scroll', e => {
    if (document.body.scrollTop > 50 ||  document.documentElement.scrollTop  > 50)
        navbar.classList.add('background');
    else
        navbar.classList.remove('background');
});