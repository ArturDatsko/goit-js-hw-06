function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(`#controls input`);
const buttonCreate = document.querySelector(`[data-create]`);
const buttonDestroy = document.querySelector(`[data-destroy]`);
const boxes = document.querySelector(`#boxes`);

function createBoxes() {
  let size = boxes.lastChild ? boxes.lastChild.clientWidth + 10 : 30;
  let arr = [];
  for (let i = 1; i <= input.value; i++) {
    let item = document.createElement(`div`);
    item.style.width = size + "px";
    item.style.height = size + "px";
    size += 10;
    item.style.backgroundColor = getRandomHexColor();
    arr.push(item);
  }
  boxes.append(...arr);
}

function destroyBoxes() {
  [...boxes.children].forEach((box) => box.remove());
}

buttonCreate.addEventListener(`click`, createBoxes);
buttonDestroy.addEventListener(`click`, destroyBoxes);
