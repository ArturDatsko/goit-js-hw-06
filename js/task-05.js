const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", onInput);

function onInput(event) {
  if (input.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
}
