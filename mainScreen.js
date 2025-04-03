import { initField } from "./init-field.js";

function createGrid() {
  const grid = document.getElementById("grid");

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.id = field[row][col]; // örnek: cell-0-0
      cell.textContent = field[row][col]; // sayıyı yazdır
      grid.appendChild(cell);
    }
  }
}

// Sayfa yüklenince başlat
const field = initField();
createGrid(field);
