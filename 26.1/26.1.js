const submitButton = document.querySelector(".submit");
const form = document.querySelector("form");
const message = document.querySelector(".message");
const goodBtn = document.querySelector(".good");
const changeBtn = document.querySelector(".change");
const h1 = document.querySelector("h1");
const elements = form.elements;
form.addEventListener("click", (e) => {
  e.preventDefault();
});
submitButton.addEventListener("click", (e) => {
    h1.classList.remove('display-opacity')
  let flag = true;
  params = ["name", "age", "email"];
  params.forEach((input) => {
    if (!validations(input)) {
      flag = false;
    }
    if(flag){
        message.classList.add("display-opacity");
    }
  });
});

goodBtn.addEventListener('click', ()=>{
    message.classList.remove("display-opacity");
    h1.classList.add('display-opacity')
})

changeBtn.addEventListener('click',()=>{
    form.reset();
    message.classList.remove("display-opacity");
});

const validations = (type) => {
  const regexExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

  if (type == "name") {
    return /^[a-zA-Z]/.test(elements.name.value);
  }
  if ((type = "email")) {
    return regexExp.test(elements.name.value);
  }
  if ((type = "age")) {
    return Number(elements.age.value) < 0 || Number(elements.age.value) > 120;
  }
};
