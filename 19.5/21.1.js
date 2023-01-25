const input = document.querySelector("input");
const resultText = document.querySelector("h2");

input.addEventListener("input", () => {
  if (Number(input.value) < 18) {
    resultText.style.color = "red";
    resultText.textContent = `You're too young!`;
  } else if (Number(input.value) >= 18 && Number(input.value) <= 120) {
    resultText.style.color = "green";
    resultText.textContent = `You can drink!`;
  } else {
    resultText.textContent = "";
  }
});
