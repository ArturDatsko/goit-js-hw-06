const range = document.querySelector(`#font-size-control`);
const text = document.querySelector(`#text`);

const changeSize = (event) => {
  text.style.fontSize = event.target.value + "px";
};

range.addEventListener(`input`, changeSize);
