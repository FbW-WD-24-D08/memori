let count = 0;
const countTitle = document.getElementById("scoreValue");

let tempCount = 1;
const foundNumbers = [];

const cards = document.querySelectorAll(".cell");
clearCards();

function clearCards() {
  cards.forEach((card) => {
    if (!card.classList.contains("found")) {
      // فقط کارت‌های پیدا نشده را پاک می‌کنیم
      card.innerText = "";
    }
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

    // اگر کارت قبلاً پیدا شده باشد، هیچ کاری نکنید
    if (event.target.classList.contains("found")) {
      return;
    }

    event.target.innerText = event.target.id;
    if (tempNumber !== 0) {
      if (tempNumber === parseInt(event.target.id)) {
        if (!foundNumbers.includes(tempNumber)) {
          foundNumbers.push(tempNumber);
          countTitle.innerText = `${parseInt(countTitle.innerText) + 1}`;
          event.target.classList.add("found"); // کارت را به عنوان پیدا شده علامت‌گذاری کنید
          cards.forEach((c) => {
            if (parseInt(c.id) === tempNumber) {
              c.classList.add("found"); // کارت دوم را نیز علامت‌گذاری کنید
            }
          });
        }
      }
    }
    tempNumber = parseInt(event.target.id);
    tempCount += 1;
  });
});
