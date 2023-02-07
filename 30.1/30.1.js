const input = document.getElementById("person");
const addBtn = document.querySelector("button");
const cardsContainer = document.querySelector(".cards");

addBtn.addEventListener("click", () => {
  onClickAdd();
});

const onClickAdd = () => {
  if (!input.value) {
    return;
  }
  const person = input.value;
  createCard(person);
};

async function createCard(person) {
  const response = await fetch(`https://api.github.com/users/${person}`);
  if (!response.ok) {
    return;
  }
  await response.json()
  .then((data) => {
    cardsContainer.innerHTML += `
    <div class="crad">
      <span>Name: ${data.name}</span>
      <img src="${data.avatar_url}" width="100" alt="">
      <span>public repos: ${data.public_repos}</span>
    </div>
    `;
  });
}
