document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginContainer = document.getElementById("login-container");
    const registrationContainer = document.getElementById("registration-container");
    const loginError = document.getElementById("login-error");

    // Mock credentials
    const validUsername = "admin";
    const validPassword = "1234";

    // Handle Login
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === validUsername && password === validPassword) {
            loginContainer.style.display = "none";
            registrationContainer.style.display = "block";
        } else {
            loginError.textContent = "Invalid credentials!";
        }
    });

    // Handle Registration Form Submission
    const registrationForm = document.getElementById("registration-form");
    const formMessage = document.getElementById("form-message");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const selectedCapital = document.querySelector('input[name="capital"]:checked');
        const selectedLanguages = document.querySelectorAll('input[name="language"]:checked');

        if (!selectedCapital) {
            alert("Please select the correct capital of Kenya.");
            return;
        }

        if (selectedCapital.value !== "Nairobi") {
            alert("Incorrect! The correct answer is Nairobi.");
            return;
        }

        let selectedLangs = [];
        selectedLanguages.forEach(lang => selectedLangs.push(lang.value));

        formMessage.textContent = `Thank you, ${name}. You selected: ${selectedLangs.join(", ")}`;
    });
});
