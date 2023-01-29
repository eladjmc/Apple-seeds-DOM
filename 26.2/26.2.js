const checkbox = document.querySelector("input");
const image = document.querySelector("img");

checkbox.addEventListener("change", (e) => {
  image.classList.toggle("opacity");
});
