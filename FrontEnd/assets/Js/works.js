// concerne les travaux et la gallery de l'artiste

// récupération des travaux depuis le back-end

export function renderWorks(category) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";

//appel de l'API avec une requête GET afin de récupérer dynamiquement les projets de l'architecte.

fetch("http://localhost:5678/api/works?timestamp=" + Date.now())
    .then((reponse) => {
        if (reponse.ok) {
            return reponse.json();
        }
    })

// Ajout d'une gallery Js 

    .then((works) => {
        if (category != "Tous")  {

            works = works.filter((work) => category == work.category.name)
        }
        works.forEach((work) => {
            const newFigure = document.createElement("figure");
            const newImage = document.createElement("img");
            newImage.src = work.imageUrl;
            newImage.alt = "photo du projet";

            newFigure.appendChild(newImage);
            const newFigcaption = document.createElement("figcaption");
            newFigcaption.innerText = work.title;

            newFigure.setAttribute("id", `list-${work.id}`)

            newFigure.appendChild(newFigcaption);
            gallery.appendChild(newFigure);
        })
    })

}








