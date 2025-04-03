function initField() {
    return [
      [4, 7, 1, 8],
      [2, 6, 5, 3],
      [7, 4, 6, 1],
      [5, 3, 2, 8]
    ];
  }

  function createGrid(field) {
    const grid = document.getElementById('grid');

    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `cell-${row}-${col}`;  // örnek: cell-0-0
        cell.textContent = field[row][col];  // sayıyı yazdır
        grid.appendChild(cell);
      }
    }
  }

  // Sayfa yüklenince başlat
  const field = initField();
  createGrid(field);