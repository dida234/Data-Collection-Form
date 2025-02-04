document.addEventListener("DOMContentLoaded", function () { 
    const loginForm = document.getElementById("login-form");
    const loginContainer = document.getElementById("login-container");
    const registrationContainer = document.getElementById("registration-container");
    const loginError = document.getElementById("login-error");

    // Mock credentials
    const validUsername = "admin";
    const validPassword = "551551";

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

    // Handle Structure Question Form Submission
    const structureForm = document.getElementById("structure-form");
    const structureMessage = document.getElementById("structure-message");

    structureForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const selectedStructure = document.querySelector('input[name="structure"]:checked');
        const selectedConcepts = document.querySelectorAll('input[name="concept"]:checked');

        if (!selectedStructure) {
            alert("Please select a structure.");
            return;
        }

        let selectedConceptsList = [];
        selectedConcepts.forEach(concept => selectedConceptsList.push(concept.value));

        structureMessage.textContent = `Thank you, ${name}. You selected: ${selectedStructure.value} and the following concepts: ${selectedConceptsList.join(", ")}`;
    });
});
