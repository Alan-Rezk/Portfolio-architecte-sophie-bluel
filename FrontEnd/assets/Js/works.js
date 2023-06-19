// concerne les travaux et la gallery de l'artiste

// récupération des travaux depuis le back-end

export function renderWorks(category) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";

//appel de l'API avec une requête GET afin de récupérer dynamiquement les projets de l'architecte.

fetch("http://localhost:5678/api/works?timestamp=" + Date.now())
    .then((response) => {
        console.log(response.status);

        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Erreur de la requête");
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
    //si une erreur de récupération de API, afficher un message d'erreur
    .catch((err) => {
        gallery.innerHTML = `<p>Une erreur est survenue (${err})</p>`;
      });
}








