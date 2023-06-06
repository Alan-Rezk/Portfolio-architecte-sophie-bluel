// modale pour l'authentification de l'utilisateur

// l'utilisateur doit avoir soumis une action dans le formulaire il faut vérifier pour obtenir l'info
const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    //empêche le comportement par défaut du navigateur (rechargement de la page lors de la soumission du formulaire)
    e.preventDefault();
    // extraction des valeurs du formulaire + vérification réussite extraction
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const datas = { email, password };
    console.log(datas);

    //vérification des valeurs du formulaire en cas de faute d'entrée
    if (!email) {
        alert("Veuillez saisir une adresse mail");
        return;
    }
    if (!password) {
        alert("Veuillez saisir un mot de passe");
        return;
    }
    //Faire appel à l'API pour email et mot de passe avec fetch Post
    fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(datas),
    })
})