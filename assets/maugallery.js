window.onload = () => {
  const filters = document.querySelectorAll("#filters button");

  for (let filter of filters) {
    filter.addEventListener("click", function () {
      let tag = this.id;

      let images = document.querySelectorAll("#all-gallery img");
      for (let image of images) {
        image.classList.replace("active", "inactive");

        if (tag in image.dataset || tag === "tous") {
          image.classList.replace("inactive", "active");
        }
      }
    });
  }
};
