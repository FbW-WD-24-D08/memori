let count = 0;
const countTitle = document.getElementById("count");

let tempCount = 1;
const foundNumbers = [];

const cards = document.querySelectorAll(".card");

function clearCards() {
  cards.forEach((card) => {
    card.innerText = "";
  });
}

let tempNumber = 0;
cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    if (tempCount === 3) {
      clearCards();
      tempCount = 1;
      tempNumber = 0;
    }
    event.target.innerText = event.target.id;
    if (tempNumber !== 0) {
      if (tempNumber === parseInt(event.target.id)) {
        if (!foundNumbers.includes(tempNumber)) {
          foundNumbers.push(tempNumber);
          countTitle.innerText = `${parseInt(countTitle.innerText) + 1}`;
        }
      }
    }
    tempNumber = parseInt(event.target.id);
    tempCount += 1;
  });
});
