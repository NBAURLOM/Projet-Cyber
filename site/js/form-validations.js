document.getElementById("contact-form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Veuillez remplir tous les champs.");
        event.preventDefault();
        return;
    }

    if (!email.includes("@")) {
        alert("Veuillez entrer une adresse email valide.");
        event.preventDefault();
    }
});
