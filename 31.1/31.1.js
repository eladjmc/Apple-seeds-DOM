const rows = document.querySelectorAll(".row");
const getDataBtn = document.querySelector("button");
const tableContainer = document.querySelector(".container");
const starWarsChars = [];
const AMOUNT_OF_CHARS = 10;
const AMOUNT_OF_PARAMETERS = 5;
getDataBtn.addEventListener("click", () => {
  if (starWarsChars.length) return;
  for (let index = 1; index <= AMOUNT_OF_CHARS; index++) {
    createTable(index);
  }
});

async function createTable(number) {
  try {
    const char = {};
    char.planet = {};
    const response = await fetch(`https://swapi.dev/api/people/${number}`);
    if (!response.ok) {
      return;
    }
    const personData = await response.json();
    char.hair = personData.hair_color;
    char.height = personData.height;
    char.name = personData.name;
    const planetUrl = personData.homeworld;

    const responsePlanet = await fetch(planetUrl);
    if (!responsePlanet.ok) {
      char.planet.name = "NoData";
      char.planet.population = 0;
    } else {
      const planet = await responsePlanet.json();
      char.planet.name = planet.name;
      char.planet.population = planet.population;
      starWarsChars.push(char);
      if (starWarsChars.length >= 10) {
        buildTable();
      }
    }
  } catch (error) {
    console.error(error);
  }
}

const buildTable = () => {
  for (let index = 0; index < starWarsChars.length; index++) {
    let parametersArr = convertParamsToArr(index);
    const row = document.createElement("div");
    row.classList.add("row");
    tableContainer.appendChild(row);

    for (let cellIndex = 0; cellIndex < AMOUNT_OF_PARAMETERS; cellIndex++) {
      const parameter = document.createElement("p");
      parametersArr = parametersArr.flat();
      parameter.textContent = parametersArr[cellIndex];
      row.appendChild(parameter);
    }
  }
};

const convertParamsToArr = (index) => {
  let parametersArr = Object.values(starWarsChars[index]);
  parametersArr.reverse();
  parametersArr.pop();
  parametersArr.push(Object.values(starWarsChars[index].planet));
  return parametersArr;
};
