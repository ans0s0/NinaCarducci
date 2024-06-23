document.querySelectorAll(".active").forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();

    let images = elem.src;

    console.log(images);

    for (let image of images) {
      // Création d’une balise div dédiée à un travail
      const oneElement = document.createElement("div");
      oneElement.style.width = "80%";

      // On accède à l’indice i de la liste pieces pour configurer la source de l’image.
      const imageElement = document.createElement("img");
      imageElement.src = elem.src;

      // On positionne les éléments à la section principale gallery
      const sectionGalleryWork = document.querySelector(".test");

      // On rattache les balises image et title à la div
      sectionGalleryWork.appendChild(oneElement);
      // On rattache l’image à oneElement (la balise div)
      oneElement.appendChild(imageElement);

      return images;
    }
  });
});
