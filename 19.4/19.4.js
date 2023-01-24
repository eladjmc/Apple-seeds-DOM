var audio = new Audio("./theBoneOfMySword.mp3");
const mainContainer = document.createElement("div");
const button = document.createElement("button");
mainContainer.classList.add("main-container");
document.querySelector("body").appendChild(mainContainer);
button.textContent = "Unlimited Blade Works";
document.querySelector("body").appendChild(button);
elementsDisplayArr = [];
h1 = document.createElement("h1");
h1.textContent = `I am the Bone of my Sword`;
elementsDisplayArr.push(h1);
h2 = document.createElement("h2");
h2.textContent = `Unlimited Blade Works!!!`;
let toggle = true;

paragraphArrText = [
  `Steel is my Body and Fire is my Blood.`,
  `I have created over a Thousand Blades,`,
  `Unknown to Death,`,
  `Nor known to Life.`,
  `Have withstood Pain to create many Weapons`,
  `Yet those Hands will never hold Anything.`,
  `So, as I Pray--`,
];
for (let i = 1; i < 8; i++) {
  elementsDisplayArr.push(document.createElement("p"));
  elementsDisplayArr[i].textContent = `${paragraphArrText[i - 1]}`;
}
elementsDisplayArr.push(h2);
let inter = null;

button.addEventListener("click", () => {
  scripRun();
});

const scripRun = () => {
  audio.play();
  button.style.display = "none";
  toggle = !toggle;
  if (toggle) {
    clearInterval(inter);
    toggle = !toggle;
    return;
  }
  let j = 0;
  inter = setInterval(function () {
    if (j === elementsDisplayArr.length) {
      elementsDisplayArr[j - 1].remove();
      toggle = !toggle;
      clearInterval(inter);
      button.style.display = "block";
      return;
    }
    if (j !== 0) {
      elementsDisplayArr[j - 1].remove();
    }
    mainContainer.appendChild(elementsDisplayArr[j]);
    j++;
  }, 3000);
};
