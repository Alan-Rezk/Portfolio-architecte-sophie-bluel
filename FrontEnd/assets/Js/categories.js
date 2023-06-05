// module filtre des travaux par catégories

// j'importe le rendu de works pour donner accès à la fonction

import { renderWorks } from "./works.js";
export function renderFilters() {
    // je fais une requête GET pour avoir accès aux donnés catégories de l'API 
    fetch("http://localhost:5678/api/categories")
    .then((response) => response.json())
    //début de création des boutons du filtres
    //Une fois les données JSON disponibles je passe les Données Json en paramétre categories
    .then((categories) => {
        //je créer un premier bouton Global "Tous"
        const filterDiv = document.createElement("div");
        filterDiv.className = "filtreDiv";
        const allElementsButton = document.createElement("button");
        allElementsButton.innerText = "Tous";
        filterDiv.appendChild(allElementsButton);
    })
}