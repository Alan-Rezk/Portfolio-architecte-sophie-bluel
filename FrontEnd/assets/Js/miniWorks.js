//modale sur l'affichage des travaux en miniature
export function renderMiniWorks(category) {
	const modalWrapper = document.createElement("div");
	modalWrapper.className = "miniGallery";
	const divider = document.querySelector(".divider");
//appel à API avec attente de réponse en JSON
	fetch("http://localhost:5678/api/works")
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
		})
		//mettre en place chaque travaux dans works
		.then((works) => {
			works.forEach((work) => {
				const newFigure = document.createElement("figure");
				const newImage = document.createElement("img");
				const trashCan = document.createElement("i");
				trashCan.classList.add("fa-regular", "fa-trash-can", "deleteWork");
				newFigure.setAttribute("id", `edit-${work.id}`);

				newImage.src = work.imageUrl;
				newImage.alt = "Photo du projet";
// création d'une structure HTML avec image texte et corbeille
				newFigure.appendChild(newImage);
				const newFigcaption = document.createElement("figcaption");
				newFigcaption.innerText = "éditer";
				newFigure.append(trashCan);
				newFigure.appendChild(newFigcaption);
				modalWrapper.appendChild(newFigure);
				divider.insertAdjacentElement("beforeBegin", modalWrapper);

				// traitement des élèments supprimé
				trashCan.addEventListener("click", function () {
					const id = work.id;
					console.log(id);
					deleteWorks(id);
				});

				//je créer une fonction async pour supprimer les travaux
				const deleteWorks = async function (id) {
					const response = await fetch(
						"http://localhost:5678/api/works/" + id,
						{
							method: "DELETE",
							headers: {
								"content-type": "application/json",
								Authorization: "Bearer " + window.localStorage.getItem("token"),
							},
						}
					);
					//vérification de la suppression des travaux
					if (response.ok) {
						document.getElementById(`list-${id}`).remove();
						document.getElementById(`edit-${id}`).remove();
					  } else {
						console.error("Error deleting work");
					  }
				};
			});
		})
//message d'erreur en cas de problème
		.catch((err) => {
			gallery.innerHTML = `<p>Une erreur est survenue (${err})</p>`;
		});
}