function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreate = document.querySelector("button[data-create]");

btnCreate.addEventListener("click", () => {
  const input = document.querySelector("input");
  let max = Number(input.max);
  let min = Number(input.min);
  let step = Number(input.step);
  let width = 30;
  let height = 30;

  function createBoxes(amount) {
    if (amount >= min && amount <= max) {
      for (let i = 1; i <= amount; i += step) {
        const boxesParent = document.querySelector("#boxes");
        const boxesChield = document.createElement("div");
        boxesChield.style.width = `${(width += 10)}px`;
        boxesChield.style.height = `${(height += 10)}px`;
        boxesChield.classList.add("boxes-chield");
        boxesChield.style.backgroundColor = getRandomHexColor();
        boxesParent.append(boxesChield);
      }
    } else {
      return;
    }
  }
  createBoxes(input.value);
});

const btnDestroy = document.querySelector("button[data-destroy]");
btnDestroy.addEventListener("click", () => {
  const boxesParent = document.querySelector("#boxes"),
    input = document.querySelector("input");
  boxesParent.innerHTML = "";
  input.value = "";
});
