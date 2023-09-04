const form = document.querySelector(".login-form");

const formSender = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert(`All fields must be filled!!!`);
  }
  console.log({ email: email.value, password: password.value });
  form.reset();
};

form.addEventListener(`submit`, formSender);
