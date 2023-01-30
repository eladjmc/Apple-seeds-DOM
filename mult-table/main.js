const container = document.querySelector(".table-container");
const body = document.querySelector("body");
let row = {};
let cell = {};
for (let i = 0; i <= 10; i++) {
  row = document.createElement("div");
  row.classList.add("row");
  body.appendChild(row);
  for (let j = 0; j <= 20; j++) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    row.appendChild(cell);
    if (i === 0 || j === 0) {
      cell.classList.add("first-cells");
      if (i + j === 0) {
        cell.textContent = "X";
      }
      else if (!i){
        cell.textContent = i+j;
      }
      else if (!j){
        cell.textContent = i+j;
      }
    } else {
      cell.textContent = i * j;
    }
  }
}
