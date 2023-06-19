// module filtre des travaux par catégories

// j'importe le rendu de works pour donner accès à la fonction

import { renderWorks } from "./works.js";

export function renderFilters() {
    // je fais une requête GET pour avoir accès aux donnés catégories de l'API 
    fetch("http://localhost:5678/api/categories")
    .then((response) => {
        console.log(response.status);
        return response.json();
    })
    //début de création des boutons du filtres
    //Une fois les données JSON disponibles je passe les Données Json en paramétre categories
    .then((categories) => {
        //je créer un premier bouton Global "Tous"
        const filterDiv = document.createElement("div");
        filterDiv.className = "filterDiv";
        const allElementsButton = document.createElement("button");
        // nom et insertion du bouton 
        allElementsButton.innerText = "Tous";
        //réglage paramétre pour la couleur des boutons filtre
        allElementsButton.classList.add('btn')
        addActiveClass(allElementsButton)
        //rajout du bouton dans la Div
        filterDiv.appendChild(allElementsButton);
        //création d'une boucle pour avoir l'ensemble des boutons
        categories.forEach((category) => {
            const filterButton = document.createElement("button");
            filterButton.innerText = category.name;
            filterButton.className = "btn"
            filterDiv.appendChild(filterButton);

            filterButton.addEventListener("click", function () {
                renderWorks(category.name);
                addActiveClass(filterButton);
              });
        })
// fin de l'insertion des boutons filtres
        const gallery = document.querySelector(".gallery");
        gallery.parentNode.insertBefore(filterDiv, gallery);
  
        allElementsButton.addEventListener("click", function () {
          addActiveClass(allElementsButton)
          renderWorks("Tous");
        });
    })
}

function addActiveClass(button){
    document.querySelectorAll(".btn").forEach((btn) => {
        btn.classList.remove("active")
    })
    button.classList.add("active")
  }
