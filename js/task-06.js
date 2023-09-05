const input = document.getElementById(`validation-input`);

function updateValidationClass(currentTarget) {
  const length = Number(currentTarget.dataset.length);
  const inputLength = currentTarget.value.length;
  const classes = currentTarget.classList;

  if (inputLength === length) {
    updateClass(classes, `valid`, `invalid`);
  } else {
    updateClass(classes, `invalid`, `valid`);
  }
}

function updateClass(element, a, b) {
  element.add(`valid`);
  element.remove(`invalid`);
}
