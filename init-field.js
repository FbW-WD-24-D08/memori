export function initField() {
  // Zahlenpaare von 1 bis 8 erstellen und verdoppeln
  let numbers = [...Array(8).keys()].map((n) => n + 1).flatMap((n) => [n, n]);

  // Zahlen mischen
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  // 4x4 Matrix aus der gemischten Liste erstellen
  let field = [];
  while (numbers.length) {
    field.push(numbers.splice(0, 4));
  }

  return field;
}
