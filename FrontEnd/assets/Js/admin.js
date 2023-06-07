//modale de la barre administrateur

//je crée une fonction pour utiliser fontawesome

function createModalLink (classModal, editText) {
    //je crée un élément pour afficher l'icône et le paramétré avec les classes fontawesome
    const editIcon = document.createElement('i')
    editIcon.classList.add('fa-sharp', 'fa-solid', 'fa-pen-to-square')
    const pText = document.createElement('p')
    pText.innerHTML = editText
    pText.innerHTML = editText
    modalDivLink.classList.add('modal-div-link', 'js-modal')

    modalDivLink.appendChild(editIcon)
    modalDivLink.appendChild(pText)
//création d'une div
    const newDivTitle = document.createElement('div')
    newDivTitle.className = classModal
    newDivTitle.appendChild(modalDivLink)
//ne pas oublier un return pour mettre fin 
    return newDivTitle
}

//je peux maintenant créer l'admin barre

