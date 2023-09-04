const form = document.querySelector(".login-form");

const formSender = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert(`All fields must be filled!!!`);
  } else {
    console.log({ email: email.value, password: password.value });
    form.reset();
  }
};

form.addEventListener(`submit`, formSender);
