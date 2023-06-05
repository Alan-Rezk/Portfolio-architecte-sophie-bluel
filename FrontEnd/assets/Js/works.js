// concerne les les travaux et la gallery de l'artiste

// récupération des travaux depuis le back-end

const gallery = document.querySelector(".gallery");
gallery.innerHTML = "";

//appel de l'API avec une requête GET afin de récupérer dynamiquement les projets de l'architecte.

fetch("http://localhost:5678/api/works?timestamp=" + Date.now())
    .then((reponse) => {
        if (reponse.ok) {
            return reponse.json();
        }
    })








