//modale de la barre administrateur
//je créer un export de la modale pour home.js après avoir structuré toute la page
export function setAdminPage () {
    const projetsTitle = document.getElementById('portfolio').querySelector('h2')
    projetsTitle.remove()
    const modalLink = createModalLink('admin-div', 'modifier')
    const portfolioSection = document.getElementById('portfolio')
    portfolioSection.insertAdjacentElement('afterbegin', modalLink)
  
    const underMainPic = document
      .getElementById('introduction')
      .querySelector('figure')
    const modalLink2 = createModalLink('main-pic', 'modifier')
    underMainPic.insertAdjacentElement('beforeend', modalLink2)
  
    const h2Title = document.createElement('h2')
    h2Title.innerText = 'Mes projets'
    modalLink.prepend(h2Title)
  
    addMarginClass()
  
    createAdminNav()
  
    logBtn()
  }
//je crée une fonction pour utiliser fontawesome

function createModalLink (classModal, editText) {
    //je crée un élément pour afficher l'icône et le paramétré avec les classes fontawesome
    const editIcon = document.createElement('i')
    editIcon.classList.add('fa-sharp', 'fa-solid', 'fa-pen-to-square')
    const pText = document.createElement('p')
    pText.innerHTML = editText
    const modalDivLink = document.createElement('div')
    modalDivLink.classList.add('modal-div-link', 'js-modal')
//ajout de l'icone et du texte
    modalDivLink.appendChild(editIcon)
    modalDivLink.appendChild(pText)
//création d'une div pour contenir l'icone et le texte
    const newDivTitle = document.createElement('div')
    newDivTitle.className = classModal
    newDivTitle.appendChild(modalDivLink)
//ne pas oublier un return pour mettre fin et l'ajouter au DOM
    return newDivTitle
}

//je peux maintenant créer l'admin barre

function createAdminNav () {
    const adminBar = document.createElement('div')
    adminBar.innerHTML = '<i></i> <p>Mode Edition</p> <button>publier les changements</button>'
    adminBar.className = 'admin-bar'
    adminBar.firstChild.classList.add('fa-sharp', 'fa-solid', 'fa-pen-to-square')
    const navheader = document.querySelector('header')
    navheader.insertAdjacentElement('afterbegin', adminBar)

    return adminBar
}

// pour modifier le style de 'admin bar' je créer une classe modifiable en css
const addMarginClass = function () {
    const navBar = document.querySelector('header')
    navBar.classList.add('adminHeader')
  }
  // bouton de déconnection
  function logBtn () {
    const logBtn = document.querySelector('header nav ul li:nth-child(3)')
    logBtn.innerText = 'logout'
    logBtn.addEventListener('click', function () {
      localStorage.removeItem('token')
      window.location.href = './'
    })
  }