const input = document.getElementById(`validation-input`);

const onBlur = ({ currentTarget }) => {
  const length = currentTarget.dataset.length;
  const inputLength = currentTarget.value.length;
  const classes = currentTarget.classList;

  if (inputLength == length) {
    classes.add(`valid`);
    classes.remove(`invalid`);
  } else {
    classes.add(`invalid`);
    classes.remove(`valid`);
  }
};

input.addEventListener(`blur`, onBlur);
