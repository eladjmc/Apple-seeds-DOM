const input = document.querySelector("input");
const container = document.querySelector(".container");
const button = document.querySelector("button");
const h3 = document.querySelector("h3");
let val = "";
let smile =null;
button.addEventListener("click", () => {
  val = input.value;
  h3.style.opacity = "0";
  let isNum = /^\d+$/.test(val);
  if (!isNum) {
    h3.style.opacity = "1";
    return;
  }
  const old = document.querySelector(".smile-container");
  if (old) {
    old.remove();
  }
  const smileContainer = document.createElement("div");
  container.appendChild(smileContainer);
  smileContainer.classList.add("smile-container");
  for (let i = 0; i < parseInt(val); i++) {
    smile = document.createElement("div");
    smile.classList.add('smile');
    smileContainer.appendChild(smile);
  }
});
