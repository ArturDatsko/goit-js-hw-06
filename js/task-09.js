const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

btn.addEventListener("click", onBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function onBtnClick() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}
