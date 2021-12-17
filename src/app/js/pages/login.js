import { validateEmail } from "../utils";
export const loginPage = () => {
    if (document.querySelector('.js-sign-in-btn') !== null) {
        document.querySelector('.js-sign-in-btn').addEventListener('click', (event) => {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email.trim() == '' || password.trim() == '') {
                alert("Please fill the form");
                return;
            } else if (!validateEmail(email.trim())) {
                alert('Please enter valid e-mail');
                return;
            }

            alert('Yuppi! Your inputs are valid')
        });
    }
}