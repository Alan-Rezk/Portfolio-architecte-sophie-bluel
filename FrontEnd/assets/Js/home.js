// permet de regrouper les futures functions des diférents modules

import { renderWorks } from "./works.js";
import { renderFilters } from "./categories.js";
import { setAdminPage } from "./admin.js";
import { modalFunction } from "./modal.js";


// Appel de fonction pour afficher tous les travaux
// vérification de présence d'un token avec ou sans les fonctions
renderWorks("Tous")

if (localStorage.getItem('token')) {
    setAdminPage();
    modalFunction()
} else {
    renderFilters()
}