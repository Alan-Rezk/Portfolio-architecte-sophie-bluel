
import { renderMiniWorks } from "./miniWorks.js";

export function modalFunction() {
	const createModal = function (e) {
		const divTag = document.createElement("div");
		divTag.setAttribute("id", "modal1");
		divTag.classList.add("modal", "d-none");
		divTag.setAttribute("aria-hidden", "true");
		divTag.setAttribute("role", "dialogue");
		const main = document.querySelector("main");
		main.appendChild(divTag);
		return divTag;
	  };
//création du contenu de la modal
	function createModalContent() {
		const newOuterDiv = document.createElement("div");
		newOuterDiv.classList.add("modal-content", "d-none");

		const newInnerDiv = document.createElement("div");
		newInnerDiv.classList.add("modal-wrapper");

		const closeX = document.createElement("span");
		closeX.className = "close";
		closeX.innerText = "x";
		const modalTitle = document.createElement("h3");
		modalTitle.innerText = "Galerie Photo";

		const divider = document.createElement("hr");
		divider.className = "divider";

		const addPhotoBtn = document.createElement("button");
		addPhotoBtn.innerText = "Ajouter une photo";
		addPhotoBtn.classList.add("next-page")

		addPhotoBtn.addEventListener('click', function(){
			nextPageModal()
		})

		const deleteGalleryLink = document.createElement("a");
		deleteGalleryLink.innerText = "Supprimer la galerie";

		//création d'une div globale
		newInnerDiv.appendChild(closeX);
		newInnerDiv.appendChild(modalTitle);
		newInnerDiv.appendChild(divider);
		newInnerDiv.appendChild(addPhotoBtn);
		newInnerDiv.appendChild(deleteGalleryLink);
		newOuterDiv.appendChild(newInnerDiv);
//pour finir j'ajoute le contenu de la modal
		const modalDiv = document.getElementById("modal1");
		modalDiv.appendChild(newOuterDiv);

		renderMiniWorks();
		closeModal();

	}
	
	function openModal() {
		const modalHTML = document.querySelector(".admin-div");
		modalHTML.addEventListener("click", function (e) {
			e.preventDefault()
		  const modalTag = document.getElementById('modal1');
		  const modalContent = document.querySelector('.modal-content')
		  modalTag.classList.remove("d-none");
		  modalContent.classList.remove("d-none");
		  closeModal();
		});
	  }

	function closeModal() {
		const closeX = document.querySelector(".close");
		const modalOverlay = document.getElementById("modal1")	  
		closeX.addEventListener("click", function () {
			const modalTag = document.getElementById('modal1');
			const modalContent = document.querySelector('.modal-content')
			modalTag.classList.add("d-none");
			modalContent.classList.add("d-none");
		});
		window.addEventListener("click", function(event) {
			if (event.target == modalOverlay) {
				const modalTag = document.getElementById('modal1');
				const modalContent = document.querySelector('.modal-content')
				modalTag.classList.add("d-none");
				modalContent.classList.add("d-none");			}
		  });
	  }

	createModal();
	createModalContent()
	addPhotoContent()
	openModal()

	// seconde page de la modal

	function addPhotoContent() {
		const newOuterDiv = document.querySelector(".modal-content");

		const newInnerDiv = document.createElement("div");
		newInnerDiv.classList.add("modal-ajouter-wrapper", "d-none");

		const closeX = document.createElement("span");
		closeX.className = "close";
		closeX.innerText = "x";
		newInnerDiv.appendChild(closeX);
		const divToShow = document.querySelector("modal-wrapper")

		const returnArrow = document.createElement("i");
		returnArrow.classList.add("return-arrow", "fa-solid", "fa-arrow-left-long");
		returnArrow.addEventListener("click", function () {
			previousPageModal()
		});
		newInnerDiv.appendChild(returnArrow);

		const modalTitle = document.createElement("h3");
		modalTitle.innerText = "Ajout Photo";
		newInnerDiv.appendChild(modalTitle);

		const addPhotoDiv = document.createElement("div");
		addPhotoDiv.classList.add("ajouter-photo-img-div");
		const addPhotoIcon = document.createElement("i");
		addPhotoIcon.classList.add(
			"fa-regular",
			"fa-image",
			"image-placeholder"
		);

		const addPhotoForm = document.createElement("form");
		addPhotoForm.setAttribute("enctype", "multipart/form-data");
		addPhotoForm.setAttribute("method", "post");
		addPhotoForm.setAttribute("name", "ajouterPhotoForm");
		addPhotoForm.setAttribute("id", "ajouterPhotoForm");

		const addPhotoBtn2 = document.createElement("input");
		addPhotoBtn2.setAttribute("name", "image")
		addPhotoBtn2.setAttribute("id", "image")
		addPhotoBtn2.classList.add("d-none");
		addPhotoBtn2.setAttribute("type", "file");
		const addPhotoLabel = document.createElement("label")
		addPhotoLabel.setAttribute("for", "image")
		addPhotoLabel.setAttribute("class", "ajouter-btn")
		addPhotoLabel.innerText = "+ Ajouter Photo"

		const addPhotoFormats = document.createElement("p");
		addPhotoFormats.classList.add("list-formats")
		addPhotoFormats.innerText = "jpg, png : 4mo max";

		const imagePreviewDiv = document.createElement("div");
		imagePreviewDiv.setAttribute("id", "image-preview-div");
		imagePreviewDiv.classList.add("d-none")

		addPhotoForm.appendChild(imagePreviewDiv);

		addPhotoLabel.appendChild(addPhotoBtn2)
		addPhotoDiv.appendChild(addPhotoIcon);
		addPhotoDiv.appendChild(addPhotoLabel)
		addPhotoDiv.appendChild(addPhotoFormats);

		addPhotoForm.appendChild(addPhotoDiv);

		const addPhotoTitleLabel = document.createElement("label");
		addPhotoTitleLabel.setAttribute("for", "title");
		addPhotoTitleLabel.innerText = "Titre";
		addPhotoTitleLabel.classList.add("titre", "titre-margin-top");
		newInnerDiv.appendChild(addPhotoTitleLabel);
		const addPhotoTitleInput = document.createElement("input");
		addPhotoTitleInput.setAttribute("type", "text");
		addPhotoTitleInput.required = true;
		addPhotoTitleInput.setAttribute("name", "title")
		addPhotoTitleInput.setAttribute("id", "title")
		addPhotoTitleInput.classList.add("titre");

		 addPhotoTitleInput.addEventListener("input", function () {
			if (addPhotoTitleInput.value.trim() !== "" && addPhotoBtn2.files.length > 0) {
			  validatePhotoBtn.classList.add("green-bg");
			} else {
			  validatePhotoBtn.classList.remove("green-bg");
			}
		  });

		  addPhotoBtn2.addEventListener("change", function (e) {
			const file = e.target.files[0];
			const reader = new FileReader();
		  
			reader.onload = function (event) {
			  const imagePreview = document.createElement("img");
			  imagePreview.setAttribute("id", "image-preview");
			  imagePreview.src = event.target.result;
		  
			  const previewDiv = document.getElementById("image-preview-div");
			  previewDiv.innerHTML = ""; 
			  previewDiv.classList.remove("d-none")
			  const imageInputDiv = document.querySelector(".ajouter-photo-img-div");
			  imageInputDiv.classList.add("d-none")
			  
			  previewDiv.appendChild(imagePreview);
		  
			  if (addPhotoTitleInput.value.trim() !== "" && addPhotoBtn2.files.length > 0) {
				validatePhotoBtn.classList.add("green-bg");
			  } else {
				validatePhotoBtn.classList.remove("green-bg");
			  }
			};
		  
			if (file) {
			  reader.readAsDataURL(file);
			}
		  });
		  

		addPhotoForm.appendChild(addPhotoTitleLabel);
		addPhotoForm.appendChild(addPhotoTitleInput);

		const addPhotoCategorieLabel = document.createElement("label");
		addPhotoCategorieLabel.setAttribute("for", "category");
		addPhotoCategorieLabel.innerText = "Catégorie";
		addPhotoCategorieLabel.classList.add("titre", "titre-margin-top");
		addPhotoForm.appendChild(addPhotoCategorieLabel);

		const selectCategory = document.createElement("select");
		selectCategory.className = "select-category";
		selectCategory.setAttribute("id", "select-category");
		selectCategory.setAttribute("name", "category")
		addPhotoForm.appendChild(selectCategory)

		fetch("http://localhost:5678/api/categories")
			.then((response) => response.json())

			.then((categories) => {
				const selectCategory = document.getElementById("select-category");
				categories.forEach((category) => {
					const newOption = document.createElement("option");
					newOption.innerText = category.name;
					newOption.setAttribute("value", category.id);
					selectCategory.appendChild(newOption);
				});
			});
	
		const divider = document.createElement("hr");
		divider.classList.add("divider");
		addPhotoForm.appendChild(divider)

		const validatePhotoBtn = document.createElement("input");
		validatePhotoBtn.setAttribute("type", "submit")
		validatePhotoBtn.setAttribute("value", "Valider")
		validatePhotoBtn.classList.add("titre-margin-top", "valider-btn");
		
		addPhotoForm.addEventListener("submit", function (e) {
			e.preventDefault();
			if (addPhotoTitleInput.checkValidity()) {
				uploadWork();
				e.preventDefault();
			}
		});


		addPhotoForm.appendChild(validatePhotoBtn)
		newInnerDiv.appendChild(addPhotoForm);

		
		const modalHTML = document.getElementById("modal1");

		newOuterDiv.appendChild(newInnerDiv);
		modalHTML.appendChild(newOuterDiv);

		closeModal();
	}


	function nextPageModal() {
		const addPhotoBtn = document.querySelector('.next-page')
		addPhotoBtn.addEventListener("click", function (e) {
			e.stopPropagation();
			e.preventDefault();
			const modalContent = document.querySelector('.modal-wrapper')
			modalContent.classList.add("d-none");
			const nextPage = document.querySelector('.modal-ajouter-wrapper')
			nextPage.classList.remove("d-none")
		});
	}

	function previousPageModal() {
		const divToHide = document.querySelector(".modal-ajouter-wrapper")
		divToHide.classList.add('d-none')
		const divToShow = document.querySelector(".modal-wrapper")
		divToShow.classList.remove('d-none')
	}
	
	function uploadWork() {
		const addPhotoForm = document.getElementById("ajouterPhotoForm")
		const formData = new FormData(addPhotoForm);
	
		console.log(formData)

		fetch("http://localhost:5678/api/works/", {
			method: "POST",
			headers: {
				Authorization: "Bearer " + window.localStorage.getItem("token"),
			},
			body: formData,
		})
		//ajout des éléments de la galerie
			.then((response) => response.json())
			.then((data) => {
				const gallery = document.querySelector('.gallery');
				const miniGallery = document.querySelector('.miniGallery');
				const figureGallery = document.createElement('figure');
				const figureMiniGallery = document.createElement('figure');
				const title = document.createElement('figcaption');
				const img = document.createElement('img');
				img.src = data.imageUrl;
				title.innerText = data.title;

				figureGallery.appendChild(img);
				figureGallery.appendChild(title);
				gallery.appendChild(figureGallery);

				const figureClone = figureGallery.cloneNode(true);
				miniGallery.appendChild(figureClone);
				console.log("Success:", data);
				alert('Photo uploaded')
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}